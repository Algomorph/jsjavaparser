const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MakerAnnotationType", () => {
    const src = multiline(() => {/*
        @interface Preliminary {}
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary",
                        var: false
                    },
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
