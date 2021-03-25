const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ConditionalExpression", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
              i = i > 42 ? 42 : -42;
              i += i > 42 ? 42 : -42;
              i += i > 42 ? 42 : y ? -1 : +1;
              i += i > 42 ? y ? -1 : i != 42 ? --y : -42 : i++;
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
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
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
                                            operator: "+=",
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
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
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
                                            operator: "+=",
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
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "ConditionalExpression",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "y",
                                                        var: false
                                                    },
                                                    thenExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    elseExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "+",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    }
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
                                            operator: "+=",
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
                                                    node: "ConditionalExpression",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "y",
                                                        var: false
                                                    },
                                                    thenExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    elseExpression: {
                                                        node: "ConditionalExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i",
                                                                var: false
                                                            },
                                                            operator: "!=",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                        thenExpression: {
                                                            node: "PrefixExpression",
                                                            operator: "--",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "y",
                                                                var: false
                                                            }
                                                        },
                                                        elseExpression: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        }
                                                    }
                                                },
                                                elseExpression: {
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
