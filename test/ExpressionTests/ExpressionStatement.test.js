const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ExpressionStatement", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
            int x = 1;
            var y = x;
            println("hello");
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
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "var",
                                                var: true
                                            }
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
                                                    node: "SimpleName",
                                                    identifier: "x",
                                                    var: false
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "println",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"hello\""
                                                }
                                            ]
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
