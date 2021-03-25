const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyGenericClassWithBounds", () => {
    const src = multiline(() => {/*
        class Hello<T extends B.A.C & B2.A2 & B3> {}
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
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T",
                                var: false
                            },
                            typeBounds: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "B",
                                                var: false
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "A",
                                                var: false
                                            }
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "C",
                                            var: false
                                        }
                                    }
                                },
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "SimpleName",
                                            identifier: "B2",
                                            var: false
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A2",
                                            var: false
                                        }
                                    }
                                },
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "B3",
                                        var: false
                                    }
                                }
                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
