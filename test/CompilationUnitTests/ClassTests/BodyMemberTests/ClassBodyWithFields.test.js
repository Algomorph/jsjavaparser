const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithFields", () => {
    const src = multiline(() => {/*
        private final class Test {
            int RED = 1, GREEN = 2, BLUE = 4;
            float f = j;
            public int   j = 1;
            final int k = k + 1;
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
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
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
                            node: "FieldDeclaration",
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
                                        identifier: "RED",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "GREEN",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "2"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "BLUE",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "4"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "float"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "SimpleName",
                                        identifier: "j",
                                        var: false
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
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
                                        identifier: "j",
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
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "final"
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
                                        identifier: "k",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "InfixExpression",
                                        leftOperand: {
                                            node: "SimpleName",
                                            identifier: "k",
                                            var: false
                                        },
                                        operator: "+",
                                        rightOperand: {
                                            node: "NumberLiteral",
                                            token: "1"
                                        },
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
