const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("PrimaryNew", () => {
    const src = multiline(() => {/*
        class Test {
          public static void main(String[] args) {
            new String();
            new String(a);
            new java.util.Array(100);
            new String(new String(), 100);
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
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String",
                                                    var: false
                                                }
                                            },
                                            arguments: [],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String",
                                                    var: false
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "a",
                                                    var: false
                                                }
                                            ],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "java",
                                                            var: false
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "util",
                                                            var: false
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Array",
                                                        var: false
                                                    }
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "100"
                                                }
                                            ],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String",
                                                    var: false
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "ClassInstanceCreation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String",
                                                            var: false
                                                        }
                                                    },
                                                    arguments: [],
                                                    anonymousClassDeclaration: null
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "100"
                                                }
                                            ],
                                            anonymousClassDeclaration: null
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
