const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("WhileStatements", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                while (i--) hello();
                while (true) {
                    hello();
                }
                while (itr.next()) while(false);
                golab1: while(true) {;}
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
                                        node: "WhileStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i",
                                                var: false
                                            },
                                            operator: "--"
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
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
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
                                        node: "WhileStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "itr",
                                                var: false
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "next",
                                                var: false
                                            },
                                            arguments: []
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            },
                                            body: {
                                                node: "EmptyStatement"
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "golab1",
                                            var: false
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: true
                                            },
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "EmptyStatement"
                                                    }
                                                ]
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
