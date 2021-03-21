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
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parser_jar_path = os.path.join(dir_path, "target/classes/original-eclipse-ast-parser.jar")

    parser = argparse.ArgumentParser("Generate a unit test based on the provided java source file.")
    parser.add_argument("java_source_file", type=str,
                        help="Path to the source java file whose AST the parser should generate correctly in the test.")
    args = parser.parse_args()
    test_template = Template(filename=os.path.join(dir_path, "test_template.js"))

    java_source_file_path = args.java_source_file
    test_name = os.path.splitext(os.path.basename(java_source_file_path))[0]

    java_source_file = open(java_source_file_path, 'r')
    java_source = indent_multiline_string("".join(java_source_file.readlines()), 8)

    java_ast_parser_tokens = shlex.split(
        "java -Dfile.encoding=UTF-8 -jar " + parser_jar_path + " -c " + java_source_file_path
    )
    process = subprocess.Popen(java_ast_parser_tokens, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                               universal_newlines=True)

    stdout, stderr = process.communicate()
    # TODO: javadoc, extendedOperands not implemented - removing from JSON output
    parsed_ast = re.sub(r'\s*extendedOperands: \[\]', '',
                        re.sub(r'\s*javadoc: null(:?,)?', '', stdout.strip()))
    ast_text = indent_multiline_string(parsed_ast, 8)

    test_text = test_template.render(test_name=test_name, java_source=java_source, ast_text=ast_text)
    output_file_path = os.path.join(os.path.dirname(java_source_file_path), test_name + "Test.js")
    test_file = open(output_file_path, 'w')
    test_file.write(test_text)
    test_file.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
