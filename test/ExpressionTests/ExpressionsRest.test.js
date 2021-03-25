const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ExpressionsRest", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
            c = new byte[]{42};
            c = new short[];
            c = new int[5][];
            c = new long[5][42][];
            c = new float[5][42][x];
            c = new double[5][42][x][];
            boolean[] c = new boolean[42];
            c = new Hello[] {new Hello(), new Hello(42), new Hello(world)};
            c = new Hello.World[][] {
              {new Hello(), new Hello(42), new Hello(){ @override world(){} }},
              {new Hello<String>(){}, new Hello<String>(42), new Hello(world)}
            };
            x();
            x(42);
            x(y, 42);
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
                    modifiers: [],
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "byte"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "short"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
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
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "long"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "float"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "x",
                                                        var: false
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "double"
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "x",
                                                        var: false
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ArrayType",
                                            elementType: {
                                                node: "PrimitiveType",
                                                annotations: [],
                                                primitiveTypeCode: "boolean"
                                            },
                                            dimensions: [
                                                {
                                                    node: "Dimension",
                                                    annotations: []
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
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "ArrayCreation",
                                                    type: {
                                                        node: "ArrayType",
                                                        elementType: {
                                                            node: "PrimitiveType",
                                                            annotations: [],
                                                            primitiveTypeCode: "boolean"
                                                        },
                                                        dimensions: [
                                                            {
                                                                node: "Dimension",
                                                                annotations: []
                                                            }
                                                        ]
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    ],
                                                    initializer: null
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Hello",
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
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello",
                                                                    var: false
                                                                }
                                                            },
                                                            arguments: [],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello",
                                                                    var: false
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "42"
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello",
                                                                    var: false
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "world",
                                                                    var: false
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    elementType: {
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
                                                    dimensions: [
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
                                                },
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "ArrayInitializer",
                                                            expressions: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "42"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [],
                                                                    anonymousClassDeclaration: {
                                                                        node: "AnonymousClassDeclaration",
                                                                        bodyDeclarations: [
                                                                            {
                                                                                node: "MethodDeclaration",
                                                                                modifiers: [
                                                                                    {
                                                                                        node: "MarkerAnnotation",
                                                                                        typeName: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "override",
                                                                                            var: false
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                constructor: true,
                                                                                typeParameters: [],
                                                                                returnType2: null,
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "world",
                                                                                    var: false
                                                                                },
                                                                                receiverType: null,
                                                                                receiverQualifier: null,
                                                                                parameters: [],
                                                                                extraDimensions2: [],
                                                                                thrownExceptionTypes: [],
                                                                                body: {
                                                                                    node: "Block",
                                                                                    statements: []
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            node: "ArrayInitializer",
                                                            expressions: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            annotations: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "Hello",
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
                                                                            }
                                                                        ]
                                                                    },
                                                                    arguments: [],
                                                                    anonymousClassDeclaration: {
                                                                        node: "AnonymousClassDeclaration",
                                                                        bodyDeclarations: []
                                                                    }
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            annotations: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "Hello",
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
                                                                            }
                                                                        ]
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "42"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "world",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "x",
                                                var: false
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "x",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "x",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "y",
                                                    var: false
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
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
