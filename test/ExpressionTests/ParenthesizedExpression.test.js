const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ParenthesizedExpression", () => {
    const src = multiline(() => {/*
        class Test {
        	public static void test(){
                int x = 1;
                int y = (((x + (x + 1)) + 1) + 1);
                int z = ((((x + ((x + 1) + 1))) + 1));
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
                                identifier: "test",
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
                                                    identifier: "x",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "1"
                                                }
                                            }
                                        ]
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
                                                    identifier: "y",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "ParenthesizedExpression",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "ParenthesizedExpression",
                                                            expression: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "ParenthesizedExpression",
                                                                    expression: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "x",
                                                                            var: false
                                                                        },
                                                                        operator: "+",
                                                                        rightOperand: {
                                                                            node: "ParenthesizedExpression",
                                                                            expression: {
                                                                                node: "InfixExpression",
                                                                                leftOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "x",
                                                                                    var: false
                                                                                },
                                                                                operator: "+",
                                                                                rightOperand: {
                                                                                    node: "NumberLiteral",
                                                                                    token: "1"
                                                                                },
                                                                            }
                                                                        },
                                                                    }
                                                                },
                                                                operator: "+",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "1"
                                                                },
                                                            }
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        },
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "z",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "ParenthesizedExpression",
                                                    expression: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "ParenthesizedExpression",
                                                                    expression: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "x",
                                                                            var: false
                                                                        },
                                                                        operator: "+",
                                                                        rightOperand: {
                                                                            node: "ParenthesizedExpression",
                                                                            expression: {
                                                                                node: "InfixExpression",
                                                                                leftOperand: {
                                                                                    node: "ParenthesizedExpression",
                                                                                    expression: {
                                                                                        node: "InfixExpression",
                                                                                        leftOperand: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "x",
                                                                                            var: false
                                                                                        },
                                                                                        operator: "+",
                                                                                        rightOperand: {
                                                                                            node: "NumberLiteral",
                                                                                            token: "1"
                                                                                        },
                                                                                    }
                                                                                },
                                                                                operator: "+",
                                                                                rightOperand: {
                                                                                    node: "NumberLiteral",
                                                                                    token: "1"
                                                                                },
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            },
                                                        }
                                                    }
                                                }
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
