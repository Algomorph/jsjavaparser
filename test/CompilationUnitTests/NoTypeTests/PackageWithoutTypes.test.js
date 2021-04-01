const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithoutTypes", () => {
    const src = multiline(() => {/*
        package a;
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [],
                name: {
                    node: "SimpleName",
                    identifier: "a",
                    var: false
                }
            },
            imports: [],
            types: [],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
