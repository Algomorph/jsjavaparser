const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("PrimaryQualifiedIdentifierSuffix", () => {
    const src = multiline(() => {/*
        class Test {
            public static void main(String[] args) {
                c = Hello.World[].class;
                c = Hello.World[][].class;
                c = Hello[][][][].class;
                i = world[42];
                i = world[i++];
                i = hello.world[--i];
                synchronized(Test.class) {}
                synchronized(Hello.World.class){hello.world[--i]++;}
                hello.<String>world();
                hello.world.<String, Object>world(42);
                z = hello.world.<String, Object>world(42).x.field;
                hello.world.<String, Object>super();
                hello.world.<String, Object>super(42);
                x = super.field;
                x = super.field++;
                a = hello.world.super.field++;
                a = hello.world.super.field;
                b = super.field.subfield;
                x = this;
                y = this.a;
                this.b();
                this.a.b(42);
                hello.super();
                hello.world.super(42);
                hello.new World(){};
                hello.world.new <String>World(42){};
                hello.world.new <String>World<Object>(42){};
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
                                                node: "TypeLiteral",
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
                                                node: "TypeLiteral",
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
                                                node: "TypeLiteral",
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
                                                identifier: "i",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SimpleName",
                                                    identifier: "world",
                                                    var: false
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
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
                                                identifier: "i",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SimpleName",
                                                    identifier: "world",
                                                    var: false
                                                },
                                                index: {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i",
                                                        var: false
                                                    },
                                                    operator: "++"
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
                                                identifier: "i",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world",
                                                        var: false
                                                    }
                                                },
                                                index: {
                                                    node: "PrefixExpression",
                                                    operator: "--",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i",
                                                        var: false
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "TypeLiteral",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Test",
                                                    var: false
                                                }
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: []
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "TypeLiteral",
                                            type: {
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
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "ArrayAccess",
                                                            array: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello",
                                                                    var: false
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world",
                                                                    var: false
                                                                }
                                                            },
                                                            index: {
                                                                node: "PrefixExpression",
                                                                operator: "--",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i",
                                                                    var: false
                                                                }
                                                            }
                                                        },
                                                        operator: "++"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "hello",
                                                var: false
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
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world",
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
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Object",
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "z",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "hello",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "world",
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
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Object",
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
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "x",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "field",
                                                    var: false
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello",
                                                var: false
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
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
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Object",
                                                    var: false
                                                }
                                            }
                                        ],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello",
                                                var: false
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
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
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Object",
                                                    var: false
                                                }
                                            }
                                        ],
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
                                                    identifier: "field",
                                                    var: false
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
                                                identifier: "x",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field",
                                                        var: false
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "a",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "hello",
                                                            var: false
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "world",
                                                            var: false
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field",
                                                        var: false
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "a",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SuperFieldAccess",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "field",
                                                    var: false
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
                                                identifier: "b",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "subfield",
                                                    var: false
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
                                                identifier: "x",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "y",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a",
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
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "b",
                                                var: false
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "b",
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
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "hello",
                                            var: false
                                        },
                                        typeArguments: [],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello",
                                                var: false
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world",
                                                var: false
                                            }
                                        },
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
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "hello",
                                                var: false
                                            },
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World",
                                                    var: false
                                                }
                                            },
                                            arguments: [],
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world",
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
                                                    identifier: "World",
                                                    var: false
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ],
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world",
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
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "World",
                                                        var: false
                                                    }
                                                },
                                                typeArguments: [
                                                    {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Object",
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
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
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
