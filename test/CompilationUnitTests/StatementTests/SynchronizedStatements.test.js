const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("SynchronizedStatements", () => {
    const src = multiline(() => {/*
        class Test {
            public static synchronized void main(String[] args) {
                synchronized(org.Test.class) {
                    System.out.println("hello");
                }
        
                synchronized(Test.class) {
                    System.out.println("hello");
                }
        
                synchronized(Test.this) {
                    System.out.println("hello");
                }
        
                synchronized(org.Test.this) {
                    System.out.println("hello");
                }
        
                Test t = new Test();
                synchronized(t) {
                    synchronized(t) {
                        System.out.println("made it!");
                    }
                }
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
                                },
                                {
                                    node: "Modifier",
                                    keyword: "synchronized"
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
                                                        identifier: "org",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Test",
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
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
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
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "ThisExpression",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "Test",
                                                var: false
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "ThisExpression",
                                            qualifier: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "org",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Test",
                                                    var: false
                                                }
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System",
                                                                var: false
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out",
                                                                var: false
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Test",
                                                var: false
                                            }
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "t",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "ClassInstanceCreation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Test",
                                                            var: false
                                                        }
                                                    },
                                                    arguments: [],
                                                    anonymousClassDeclaration: null
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "t",
                                            var: false
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "SynchronizedStatement",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "t",
                                                        var: false
                                                    },
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "System",
                                                                            var: false
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "out",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "println",
                                                                        var: false
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"made it!\""
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
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
