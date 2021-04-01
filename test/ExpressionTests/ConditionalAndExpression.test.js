const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ConditionalAndExpression", () => {
    const src = multiline(() => {/*
        class Test {
            public static void main(String[] args) {
                boolean i = i > 42 && y < 13;
                i = i > 42 && y < 13 && false;
                i = i > 42 || y < 13 && false;
                i = i > 42 ? true : i > -42 && y < 13;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i",
                                                            var: false
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                }
                                            }
                                        ]
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
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i",
                                                            var: false
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                },
                                                operator: "&&",
                                                rightOperand: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                },
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
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i",
                                                        var: false
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    },
                                                },
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
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i",
                                                        var: false
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i",
                                                            var: false
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
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
