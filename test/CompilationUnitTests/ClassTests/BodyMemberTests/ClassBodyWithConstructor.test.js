const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithConstructor", () => {
    const src = multiline(() => {/*
        class Test {
            Test() {}
            Test(int i){
                i++;
                int c = (int)(i--+--i);
            }
            Test(int y, int i) throws World {
                Test(i--);
                y += ++i;
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
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        identifier: "i",
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
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i",
                                                var: false
                                            },
                                            operator: "++"
                                        }
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
                                                    identifier: "c",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "CastExpression",
                                                    type: {
                                                        node: "PrimitiveType",
                                                        annotations: [],
                                                        primitiveTypeCode: "int"
                                                    },
                                                    expression: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "PostfixExpression",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i",
                                                                    var: false
                                                                },
                                                                operator: "--"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "PrefixExpression",
                                                                operator: "--",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i",
                                                                    var: false
                                                                }
                                                            },
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        identifier: "y",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
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
                                        identifier: "i",
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
                                        identifier: "World",
                                        var: false
                                    }
                                }
                            ],
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
                                                identifier: "Test",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i",
                                                        var: false
                                                    },
                                                    operator: "--"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "y",
                                                var: false
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "++",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i",
                                                    var: false
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
