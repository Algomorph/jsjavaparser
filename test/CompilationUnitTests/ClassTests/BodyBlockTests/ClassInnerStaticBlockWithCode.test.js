const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassInnerStaticBlockWithCode", () => {
    const src = multiline(() => {/*
        class UA {
            static { i = j + 2; }
            static int i, j;
            static { j = 4; }
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
                                                    node: "SimpleName",
                                                    identifier: "j",
                                                    var: false
                                                },
                                                operator: "+",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "2"
                                                },
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
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
                                    initializer: null
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "j",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ]
                        },
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
                                                identifier: "j",
                                                var: false
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "4"
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
