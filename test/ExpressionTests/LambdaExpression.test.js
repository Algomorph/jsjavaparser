const JavaParser = require('../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("LambdaExpression", () => {
    const src = multiline(() => {/*
        import java.util.function.*;
        
        class LambdaExpression{
            public static void main(String[] args){
                Function<Integer, Integer> lambda0 = (x) -> x + 2;
                Function<Integer, Integer> lambda1 = x -> x + 2;
                Function<Integer, Integer> lambda2 = (Integer x) -> x + 2;
                BiFunction<Integer, Integer, Integer> lambda3 = (x, y) -> x - y;
                BiFunction<Integer, Integer, Integer> lambda4 = (Integer x, Integer y) -> x - y;
                Function<Integer[], Integer> lambda5 = (x) -> x[0] - x[1];
                Function<ArrayList<Integer>, Integer> lambda6 = (x) -> x.get(0) - x.get(1);
            }
        }
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: null,
            imports: [
                {
                    node: "ImportDeclaration",
                    static: false,
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
                            identifier: "function",
                            var: false
                        }
                    },
                    onDemand: true
                }
            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "LambdaExpression",
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
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Function",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda0",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "x",
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
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Function",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda1",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: false,
                                                    parameters: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "x",
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
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Function",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda2",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "SingleVariableDeclaration",
                                                            modifiers: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Integer",
                                                                    var: false
                                                                }
                                                            },
                                                            varargsAnnotations: [],
                                                            varargs: false,
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "x",
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
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "BiFunction",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda3",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        },
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "y",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "x",
                                                            var: false
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "BiFunction",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda4",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "SingleVariableDeclaration",
                                                            modifiers: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Integer",
                                                                    var: false
                                                                }
                                                            },
                                                            varargsAnnotations: [],
                                                            varargs: false,
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        },
                                                        {
                                                            node: "SingleVariableDeclaration",
                                                            modifiers: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Integer",
                                                                    var: false
                                                                }
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
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "x",
                                                            var: false
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y",
                                                            var: false
                                                        },
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Function",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "ArrayType",
                                                    elementType: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Integer",
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
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda5",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "ArrayAccess",
                                                            array: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            index: {
                                                                node: "NumberLiteral",
                                                                token: "0"
                                                            }
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "ArrayAccess",
                                                            array: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            index: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            }
                                                        },
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Function",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "ParameterizedType",
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "ArrayList",
                                                            var: false
                                                        }
                                                    },
                                                    typeArguments: [
                                                        {
                                                            node: "SimpleType",
                                                            annotations: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "Integer",
                                                                var: false
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lambda6",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "LambdaExpression",
                                                    parentheses: true,
                                                    parameters: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            extraDimensions2: [],
                                                            initializer: null
                                                        }
                                                    ],
                                                    body: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "get",
                                                                var: false
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "0"
                                                                }
                                                            ]
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "x",
                                                                var: false
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "get",
                                                                var: false
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "1"
                                                                }
                                                            ]
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
