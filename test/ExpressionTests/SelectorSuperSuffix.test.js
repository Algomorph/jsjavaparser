const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("SelectorSuperSuffix", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
            this.world(42);
            int a = this.world;
            this.<String>world(42);
            super(42);
            x = super.hello;
            super.hello.world(42);
            this.hello.new Runnable(){ @override void run(){} };
            Outer.this.hello.new <String>Runnable(){ @override void run(){} };
            super.hello[42]++;
            this.hello[42]++;
            Outer.this.hello[42]++;
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
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
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
                                                initializer: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: null
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world",
                                                        var: false
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
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
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
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
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "x",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SuperFieldAccess",
                                                qualifier: null,
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SuperFieldAccess",
                                                qualifier: null,
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
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
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Runnable",
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
                                                        constructor: false,
                                                        typeParameters: [],
                                                        returnType2: {
                                                            node: "PrimitiveType",
                                                            annotations: [],
                                                            primitiveTypeCode: "void"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "run",
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
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "Outer",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
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
                                            ],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Runnable",
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
                                                        constructor: false,
                                                        typeParameters: [],
                                                        returnType2: {
                                                            node: "PrimitiveType",
                                                            annotations: [],
                                                            primitiveTypeCode: "void"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "run",
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
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
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
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: null
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
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
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "Outer",
                                                            var: false
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            operator: "++"
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
