const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ImplementsSingle", () => {
    const src = multiline(() => {/*
        class Hello implements IList {}
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
                        identifier: "Hello",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [
                        {
                            node: "SimpleType",
                            annotations: [],
                            name: {
                                node: "SimpleName",
                                identifier: "IList",
                                var: false
                            }
                        }
                    ],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
