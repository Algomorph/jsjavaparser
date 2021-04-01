const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ExtendsWithDotsWithSpacesWithGeneric", () => {
    const src = multiline(() => {/*
        class Hello<C> extends Foo < ? extends T.A<C>> . Bar {}
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
                                identifier: "C",
                                var: false
                            },
                            typeBounds: []
                        }
                    ],
                    superclassType: {
                        node: "QualifiedType",
                        qualifier: {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Foo",
                                    var: false
                                }
                            },
                            typeArguments: [
                                {
                                    node: "WildcardType",
                                    annotations: [],
                                    bound: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "T",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "A",
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
                                    },
                                    upperBound: true
                                }
                            ]
                        },
                        annotations: [],
                        name: {
                            node: "SimpleName",
                            identifier: "Bar",
                            var: false
                        }
                    },
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
