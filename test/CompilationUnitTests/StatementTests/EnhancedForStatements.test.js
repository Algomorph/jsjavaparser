const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EnhancedForStatements", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                for (float i : l) hello();
                for (final java.lang.String i : new String[]{"one","two"}) { hello(); }
                for (final @ann List<String> i : x) { hello(); }
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
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [],
                                            type: {
                                                node: "PrimitiveType",
                                                annotations: [],
                                                primitiveTypeCode: "float"
                                            },
                                            varargsAnnotations: [],
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i",
                                                var: false
                                            },
                                            extraDimensions2: [],
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "l",
                                            var: false
                                        },
                                        body: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello",
                                                    var: false
                                                },
                                                arguments: []
                                            }
                                        }
                                    },
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                }
                                            ],
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
                                            varargsAnnotations: [],
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i",
                                                var: false
                                            },
                                            extraDimensions2: [],
                                            initializer: null
                                        },
                                        expression: {
                                            node: "ArrayCreation",
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
                                            dimensions: [],
                                            initializer: {
                                                node: "ArrayInitializer",
                                                expressions: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"one\""
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"two\""
                                                    }
                                                ]
                                            }
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
                                                            identifier: "hello",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                },
                                                {
                                                    node: "MarkerAnnotation",
                                                    typeName: {
                                                        node: "SimpleName",
                                                        identifier: "ann",
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
                                                        identifier: "List",
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
                                            varargsAnnotations: [],
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i",
                                                var: false
                                            },
                                            extraDimensions2: [],
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "x",
                                            var: false
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
                                                            identifier: "hello",
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
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
