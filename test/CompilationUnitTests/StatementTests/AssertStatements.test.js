const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("AssertStatements", () => {
    const src = multiline(() => {/*
        class Test {
            { assert false; };
            { assert i % 3 == 2 : i; };
            public class Test {
                public static void main(String[] args) {
                    { assert x > 42; };
                    { assert i : i; };
                }
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
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "AssertStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: false
                                        },
                                        message: null
                                    }
                                ]
                            }
                        },
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "AssertStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i",
                                                    var: false
                                                },
                                                operator: "%",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "3"
                                                },
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "2"
                                            },
                                        },
                                        message: {
                                            node: "SimpleName",
                                            identifier: "i",
                                            var: false
                                        }
                                    }
                                ]
                            }
                        },
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
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "AssertStatement",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            operator: ">",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                        message: null
                                                    }
                                                ]
                                            },
                                            {
                                                node: "EmptyStatement"
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "AssertStatement",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "i",
                                                            var: false
                                                        },
                                                        message: {
                                                            node: "SimpleName",
                                                            identifier: "i",
                                                            var: false
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "EmptyStatement"
                                            }
                                        ]
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
