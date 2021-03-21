import sys
import subprocess
import shlex
import json5
import ast
import os
from mako.template import Template


def indent_multiline_string(string, space_count):
    lines = string.split("\n")
    new_lines = []
    spaces = " " * space_count
    for line in lines:
        new_lines.append(spaces + line)
    return "\n".join(new_lines)


def main():
    test_template = Template(filename='tools/test_template.js')

    java_source_file_path = "test/ExpressionTests/ExpressionStatement2.java"
    test_name = os.path.splitext(os.path.basename(java_source_file_path))[0]

    java_source_file = open(java_source_file_path, 'r')
    java_source = indent_multiline_string("".join(java_source_file.readlines()), 8)

    java_ast_parser_tokens = shlex.split(
        "java -Dfile.encoding=UTF-8 -jar ./tools/target/classes/original-eclipse-ast-parser.jar "
        "-c " + java_source_file_path
    )
    process = subprocess.Popen(java_ast_parser_tokens, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                               universal_newlines=True)
    stdout, stderr = process.communicate()
    parsed_ast = json5.loads(stdout)
    # ast_text = indent_multiline_string(json5.dumps(parsed_ast, indent=4), 8)
    ast_text = indent_multiline_string(stdout.strip(), 8)

    test_text = test_template.render(test_name=test_name, java_source=java_source, ast_text=ast_text)
    output_file_path = os.path.join(os.path.dirname(java_source_file_path), test_name + "Test.js")
    test_file = open(output_file_path, 'w')
    test_file.write(test_text)
    test_file.close()

    return 0


if __name__ == "__main__":
    sys.exit(main())
