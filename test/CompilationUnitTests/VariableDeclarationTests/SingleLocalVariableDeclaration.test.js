const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("SingleLocalVariableDeclaration", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                int a;
                int b[];
                List<?> c[];
                Map<int[], List<?>> d;
                Map<String, List<? extends Hello.World>> d;
            }
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
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        elementType: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String",
                                                var: false
                                            }
                                        },
                                        dimensions: [
                                            {
                                                node: "Dimension",
                                                annotations: []
                                            }
                                        ]
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
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
                            thrownExceptionTypes: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "b",
                                                    var: false
                                                },
                                                extraDimensions2: [
                                                    {
                                                        node: "Dimension",
                                                        annotations: []
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "List",
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
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "c",
                                                    var: false
                                                },
                                                extraDimensions2: [
                                                    {
                                                        node: "Dimension",
                                                        annotations: []
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Map",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "int"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "ParameterizedType",
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "List",
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
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "d",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Map",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "ParameterizedType",
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "List",
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
                                                                        identifier: "Hello",
                                                                        var: false
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "World",
                                                                        var: false
                                                                    }
                                                                }
                                                            },
                                                            upperBound: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "d",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
