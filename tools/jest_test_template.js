const JavaParser = require('${java_parser_path}');
const multiline = require('multiline')

test("${test_name}", () => {
    const src = multiline(() => {/*
${java_source}
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
    ${ast_text};
    expect(output).toEqual(ground_truth);
});
