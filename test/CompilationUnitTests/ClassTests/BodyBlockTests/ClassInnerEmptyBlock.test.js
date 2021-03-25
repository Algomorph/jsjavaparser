const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassInnerEmptyBlock", () => {
    const src = multiline(() => {/*
        class Z {
            { }
        }
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
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Z",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
