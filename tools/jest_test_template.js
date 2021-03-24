const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ExpressionStatement", () => {
    const src = multiline(() => {/*
${java_source}
        */
    });
      const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
    ${ast_text};
    expect(output).toEqual(ground_truth);
});
