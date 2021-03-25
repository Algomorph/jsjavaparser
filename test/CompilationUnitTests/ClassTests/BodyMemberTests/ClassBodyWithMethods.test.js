const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithMethods", () => {
    const src = multiline(() => {/*
        private final class Test {
            void world() { }
            void semi() throws A { ; }
            public static boolean world(int[][] x){ ; }
            public static boolean[] world(int x) throws A, A.B {
                return x == 42;
            }
            public String world(int x, String y){
                return y;
            }
            public abstract T[][] get ();
            public abstract void set (K entity);
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
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
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
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
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
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "semi",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
                            extraDimensions2: [],
                            thrownExceptionTypes: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A",
                                        var: false
                                    }
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EmptyStatement"
                                    }
                                ]
                            }
                        },
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
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world",
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
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x",
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
                                        node: "EmptyStatement"
                                    }
                                ]
                            }
                        },
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
                            name: {
                                node: "SimpleName",
                                identifier: "world",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x",
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
                                        identifier: "A",
                                        var: false
                                    }
                                },
                                {
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
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "x",
                                                var: false
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "String",
                                    var: false
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "x",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "y",
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
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y",
                                            var: false
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "ArrayType",
                                elementType: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
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
                                    }
                                ]
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "get",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "set",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "K",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "entity",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
