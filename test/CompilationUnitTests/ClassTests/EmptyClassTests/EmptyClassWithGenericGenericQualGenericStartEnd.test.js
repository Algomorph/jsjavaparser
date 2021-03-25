const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithGenericGenericQualGenericStartEnd", () => {
    const src = multiline(() => {/*
        class Hello<T,T2 extends A<O>.B.C<T>.D.E<T>.F.G<R>>{}
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
                            typeBounds: []
                        },
                        {
                            node: "TypeParameter",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T2",
                                var: false
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "QualifiedType",
                                        qualifier: {
                                            node: "QualifiedType",
                                            qualifier: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "QualifiedType",
                                                    qualifier: {
                                                        node: "QualifiedType",
                                                        qualifier: {
                                                            node: "ParameterizedType",
                                                            type: {
                                                                node: "QualifiedType",
                                                                qualifier: {
                                                                    node: "QualifiedType",
                                                                    qualifier: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            annotations: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "A",
                                                                                var: false
                                                                            }
                                                                        },
                                                                        typeArguments: [
                                                                            {
                                                                                node: "SimpleType",
                                                                                annotations: [],
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "O",
                                                                                    var: false
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    annotations: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "B",
                                                                        var: false
                                                                    }
                                                                },
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "C",
                                                                    var: false
                                                                }
                                                            },
                                                            typeArguments: [
                                                                {
                                                                    node: "SimpleType",
                                                                    annotations: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "T",
                                                                        var: false
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "D",
                                                            var: false
                                                        }
                                                    },
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "E",
                                                        var: false
                                                    }
                                                },
                                                typeArguments: [
                                                    {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "T",
                                                            var: false
                                                        }
                                                    }
                                                ]
                                            },
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "F",
                                                var: false
                                            }
                                        },
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "G",
                                            var: false
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "R",
                                                var: false
                                            }
                                        }
                                    ]
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
