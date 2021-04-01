const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("BlockStatements", () => {
    const src = multiline(() => {/*
        class Test {
            public static void main(String[] args) {
                {
                    new Runnable() {
                        @Override
                        public void run() {
                            new Runnable() {
                                @Override
                                public void run() {
                                }
                            }.hashCode();
                        }
                    }.run();
                }
                {
                    int i = 42;
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
                                        node: "Block",
                                        statements: [
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
                                                                                identifier: "Override",
                                                                                var: false
                                                                            }
                                                                        },
                                                                        {
                                                                            node: "Modifier",
                                                                            keyword: "public"
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
                                                                        statements: [
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
                                                                                                                identifier: "Override",
                                                                                                                var: false
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            node: "Modifier",
                                                                                                            keyword: "public"
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
                                                                                    },
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "hashCode",
                                                                                        var: false
                                                                                    },
                                                                                    arguments: []
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "run",
                                                        var: false
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    },
                                    {
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
                                                            identifier: "i",
                                                            var: false
                                                        },
                                                        extraDimensions2: [],
                                                        initializer: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ]
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
