import sys
import subprocess
import shlex
import os
from mako.template import Template
import argparse
import re


def indent_multiline_string(string, space_count):
    lines = string.split("\n")
    new_lines = []
    spaces = " " * space_count
    for line in lines:
        new_lines.append(spaces + line)
    return "\n".join(new_lines)


def main():
    parser = argparse.ArgumentParser("Generate a unit test based on the provided java source file.")
    parser.add_argument("java_source_file", type=str,
                        help="Path to the source java file whose AST the parser should generate correctly in the test.")
    parser.add_argument("-tf", "--test_framework", type=str, default="jest",
                        help="Test framework to generate the javascript test for. Can be one of [jest, qunit]")

    args = parser.parse_args()

    dir_path = os.path.dirname(os.path.realpath(__file__))
    root_path = os.path.dirname(dir_path)
    java_parser_absolute_path = os.path.join(root_path, "lib/javaparser15_node.js")
    parser_jar_path = os.path.join(dir_path, "target/classes/original-eclipse-ast-parser.jar")

    if args.test_framework == "jest":
        test_template = Template(filename=os.path.join(dir_path, "jest_test_template.js"))
        test_name_postfix = ".test"
    elif args.test_framework == "qunit":
        test_template = Template(filename=os.path.join(dir_path, "qunit_test_template.js"))
        test_name_postfix = "QUnitTest"
    else:
        print("Unrecognized argument for --test_framework: " + args.test_framework)
        parser.print_help()
        return

    java_source_file_path = args.java_source_file
    java_parser_relative_path = os.path.relpath(java_parser_absolute_path, os.path.dirname(java_source_file_path))
    test_name = os.path.splitext(os.path.basename(java_source_file_path))[0]

    java_source_file = open(java_source_file_path, 'r')
    java_source = indent_multiline_string("".join(java_source_file.readlines()), 8)

    java_ast_parser_tokens = shlex.split(
        "java -Dfile.encoding=UTF-8 -jar " + parser_jar_path + " -c " + java_source_file_path
    )
    process = subprocess.Popen(java_ast_parser_tokens, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                               universal_newlines=True)

    stdout, stderr = process.communicate()
    # TODO: javadoc, extendedOperands, leading/tralining comments not implemented - removing from JSON output
    parsed_ast = \
        re.sub(r'\s*(?:leading|trailing)Comments:\s*\[(?:\s*{\s*node:.*\s*value:.*\s*},?)*\s*],?', '',
               re.sub(r'\s*extendedOperands: \[]', '',
                      re.sub(r'\s*javadoc: null(:?,)?', '', stdout.strip())))
    ast_text = indent_multiline_string(parsed_ast, 8)

    test_text = test_template.render(test_name=test_name, java_source=java_source, ast_text=ast_text,
                                     java_parser_path=java_parser_relative_path)
    output_file_path = os.path.join(os.path.dirname(java_source_file_path),
                                    test_name + test_name_postfix + ".js")
    test_file = open(output_file_path, 'w')
    test_file.write(test_text)
    test_file.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
