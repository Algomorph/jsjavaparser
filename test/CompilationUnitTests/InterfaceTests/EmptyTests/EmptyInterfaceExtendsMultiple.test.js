const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyInterfaceExtendsMultiple", () => {
    const src = multiline(() => {/*
        interface Test extends A, C.D {}
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
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test",
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
                                identifier: "A",
                                var: false
                            }
                        },
                        {
                            node: "SimpleType",
                            annotations: [],
                            name: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "C",
                                    var: false
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "D",
                                    var: false
                                }
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
