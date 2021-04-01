const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("TryStatements", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                try {
                    throw BlewIt();
                } catch (RuntimeException r) {
                    System.out.println("Caught RuntimeException");
                } catch (BlewIt b) {
                    System.out.println("Caught BlewIt");
                }
        
                try {
                    throw ClassNotFoundException(42);
                }
                catch (ClassNotFoundException | IllegalAccessException ex) {
                    world();
                }
                catch (final ClassNotFoundException | IllegalAccessException | BlewIt ex) {
                    world();
                }
        
                try {
                    throw BlewIt();
                } catch (BlewIt b) {
                    System.out.println("Caught BlewIt");
                } finally {
                    System.out.println("Uncaught Exception");
                }
        
                try {
                    throw BlewIt();
                } finally {
                    System.out.println("Uncaught Exception");
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
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "RuntimeException",
                                                            var: false
                                                        }
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "r",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
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
                                                                        escapedValue: "\"Caught RuntimeException\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt",
                                                            var: false
                                                        }
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "b",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
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
                                                                        escapedValue: "\"Caught BlewIt\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "ClassNotFoundException",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "ClassNotFoundException",
                                                                    var: false
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "IllegalAccessException",
                                                                    var: false
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world",
                                                                    var: false
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [
                                                        {
                                                            node: "Modifier",
                                                            keyword: "final"
                                                        }
                                                    ],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "ClassNotFoundException",
                                                                    var: false
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "IllegalAccessException",
                                                                    var: false
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BlewIt",
                                                                    var: false
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world",
                                                                    var: false
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt",
                                                            var: false
                                                        }
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "b",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
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
                                                                        escapedValue: "\"Caught BlewIt\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: {
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
                                                                escapedValue: "\"Uncaught Exception\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: {
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
                                                                escapedValue: "\"Uncaught Exception\""
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
