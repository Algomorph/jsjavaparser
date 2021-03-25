const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("PrimaryRest", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
            c = Hello.World++;
            t = int.class;
            y = int[].class;
            i = int[][][].class;
            cls = void.class;
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
                                                identifier: "c",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "Hello",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "World",
                                                        var: false
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "t",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "PrimitiveType",
                                                    annotations: [],
                                                    primitiveTypeCode: "int"
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
                                                identifier: "y",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
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
                                                        }
                                                    ]
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
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
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
                                                        },
                                                        {
                                                            node: "Dimension",
                                                            annotations: []
                                                        }
                                                    ]
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
                                                identifier: "cls",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "PrimitiveType",
                                                    annotations: [],
                                                    primitiveTypeCode: "void"
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
