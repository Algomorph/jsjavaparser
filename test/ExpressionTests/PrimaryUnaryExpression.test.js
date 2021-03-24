const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("PrimaryUnaryExpression", () => {
    const src = multiline(() => {/*
        class Test {
            public static void main(String[] args) {
                new Object(); // Primary
                new java.lang.String("hello").hashCode("hello"); // Primary Selector
                new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().equals(42); // Primary Selector+
                new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().some(42).equals(42); // Primary Selector+
                Hello.World++; // Primary PostfixOp
                Hello().World++; // Primary Selector PostfixOp
                new java.lang.String("hello").hashCode("hello").v++; // Primary Selector+ PostfixOp
                new java.lang.String("hello").hashCode("hello").h.v++; // Primary Selector+ PostfixOp
                new String("hello").hashCode("hello").h.v().hello.world++;
                ++new String("hello").hashCode("hello").h.v().hello.world;
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
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Object",
                                                    var: false
                                                }
                                            },
                                            arguments: [],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "java",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "lang",
                                                                var: false
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String",
                                                            var: false
                                                        }
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"hello\""
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hashCode",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"hello\""
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: {
                                                    node: "ClassInstanceCreation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String",
                                                            var: false
                                                        }
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "ArrayCreation",
                                                            type: {
                                                                node: "ArrayType",
                                                                elementType: {
                                                                    node: "PrimitiveType",
                                                                    annotations: [],
                                                                    primitiveTypeCode: "char"
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
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'h'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'e'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'l'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'l'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'o'"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    anonymousClassDeclaration: null
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hashCode",
                                                    var: false
                                                },
                                                arguments: []
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "equals",
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
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "ClassInstanceCreation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        type: {
                                                            node: "SimpleType",
                                                            annotations: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "String",
                                                                var: false
                                                            }
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "ArrayCreation",
                                                                type: {
                                                                    node: "ArrayType",
                                                                    elementType: {
                                                                        node: "PrimitiveType",
                                                                        annotations: [],
                                                                        primitiveTypeCode: "char"
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
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'h'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'e'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'l'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'l'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'o'"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ],
                                                        anonymousClassDeclaration: null
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hashCode",
                                                        var: false
                                                    },
                                                    arguments: []
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "some",
                                                    var: false
                                                },
                                                arguments: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ]
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "equals",
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
                                            node: "PostfixExpression",
                                            operand: {
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
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Hello",
                                                        var: false
                                                    },
                                                    arguments: []
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World",
                                                    var: false
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "ClassInstanceCreation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        type: {
                                                            node: "SimpleType",
                                                            annotations: [],
                                                            name: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "SimpleName",
                                                                        identifier: "java",
                                                                        var: false
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "lang",
                                                                        var: false
                                                                    }
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "String",
                                                                    var: false
                                                                }
                                                            }
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ],
                                                        anonymousClassDeclaration: null
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hashCode",
                                                        var: false
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "StringLiteral",
                                                            escapedValue: "\"hello\""
                                                        }
                                                    ]
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v",
                                                    var: false
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "java",
                                                                            var: false
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "lang",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "String",
                                                                        var: false
                                                                    }
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "StringLiteral",
                                                                    escapedValue: "\"hello\""
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hashCode",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "h",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v",
                                                    var: false
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "FieldAccess",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "String",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"hello\""
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hashCode",
                                                                    var: false
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"hello\""
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "h",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "v",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world",
                                                    var: false
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "++",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "FieldAccess",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        annotations: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "String",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"hello\""
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hashCode",
                                                                    var: false
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"hello\""
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "h",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "v",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world",
                                                    var: false
                                                }
                                            }
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
