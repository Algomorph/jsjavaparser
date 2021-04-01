const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ImplementsMultipleWithQualifiedWithGeneric", () => {
    const src = multiline(() => {/*
        class Hello< A, B> implements IList< C > , org.git. IHub <A,B.C<C>> {}
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
                                identifier: "A",
                                var: false
                            },
                            typeBounds: []
                        },
                        {
                            node: "TypeParameter",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "B",
                                var: false
                            },
                            typeBounds: []
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "IList",
                                    var: false
                                }
                            },
                            typeArguments: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "C",
                                        var: false
                                    }
                                }
                            ]
                        },
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "SimpleName",
                                            identifier: "org",
                                            var: false
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "git",
                                            var: false
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "IHub",
                                        var: false
                                    }
                                }
                            },
                            typeArguments: [
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
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "B",
                                                var: false
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "C",
                                                var: false
                                            }
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "C",
                                                var: false
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
