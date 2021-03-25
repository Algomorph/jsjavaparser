const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassInnerStaticBlockWithInnerBlockWithCode", () => {
    const src = multiline(() => {/*
        class UA {
            static { i = j - 1 -2 -3 - 4 -5 + 6 + 7 + 8 * 5 * 7 * 42; }
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
                        identifier: "UA",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "Initializer",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
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
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "InfixExpression",
                                                                            leftOperand: {
                                                                                node: "SimpleName",
                                                                                identifier: "j",
                                                                                var: false
                                                                            },
                                                                            operator: "-",
                                                                            rightOperand: {
                                                                                node: "NumberLiteral",
                                                                                token: "1"
                                                                            },
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "NumberLiteral",
                                                                            token: "2"
                                                                        },
                                                                    },
                                                                    operator: "-",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "3"
                                                                    },
                                                                },
                                                                operator: "-",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "4"
                                                                },
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "5"
                                                            },
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "6"
                                                        },
                                                    },
                                                    operator: "+",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "7"
                                                    },
                                                },
                                                operator: "+",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "8"
                                                            },
                                                            operator: "*",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "5"
                                                            },
                                                        },
                                                        operator: "*",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "7"
                                                        },
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
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
