const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyEnum", () => {
    const src = multiline(() => {/*
        enum Test {}
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
                    node: "EnumDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Test",
                        var: false
                    },
                    superInterfaceTypes: [],
                    enumConstants: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
