const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyInterfaceWithGenericExtendsMultiple", () => {
    const src = multiline(() => {/*
        interface Test<T> extends A, C<? extends A.B>.D<T> {}
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
                        }
                    ],
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
                            node: "ParameterizedType",
                            type: {
                                node: "QualifiedType",
                                qualifier: {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "C",
                                            var: false
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "WildcardType",
                                            annotations: [],
                                            bound: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "A",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "B",
                                                        var: false
                                                    }
                                                }
                                            },
                                            upperBound: true
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
                        }
                    ],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
