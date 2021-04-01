const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("GenericInterfaceGenericMethodMemberWithReturn", () => {
    const src = multiline(() => {/*
        public interface Service<T,U> {
            <F extends U> T executeService(Collection<?> c, @anno U... args) throws Exception;
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
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service",
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
                                identifier: "U",
                                var: false
                            },
                            typeBounds: []
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "F",
                                        var: false
                                    },
                                    typeBounds: [
                                        {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "U",
                                                var: false
                                            }
                                        }
                                    ]
                                }
                            ],
                            returnType2: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "T",
                                    var: false
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Collection",
                                                var: false
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                annotations: [],
                                                bound: null,
                                                upperBound: true
                                            }
                                        ]
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "anno",
                                                var: false
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "U",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Exception",
                                        var: false
                                    }
                                }
                            ],
                            body: null
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
