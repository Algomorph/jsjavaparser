const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("MapOfCodes", () => {
    const src = multiline(() => {/*
        public class Test {
        	public static void test(boolean forward){
                int x = 1000;
                int y = (((x - (x % 100)) / 100) + 96);
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
                                identifier: "test",
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
                                        primitiveTypeCode: "boolean"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "forward",
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
                                                    token: "1000"
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
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "ParenthesizedExpression",
                                                                            expression: {
                                                                                node: "InfixExpression",
                                                                                leftOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "x",
                                                                                    var: false
                                                                                },
                                                                                operator: "%",
                                                                                rightOperand: {
                                                                                    node: "NumberLiteral",
                                                                                    token: "100"
                                                                                },
                                                                            }
                                                                        },
                                                                    }
                                                                },
                                                                operator: "\/",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "100"
                                                                },
                                                            }
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "96"
                                                        },
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
