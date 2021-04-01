const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("SwitchBreakContinueReturnStatements", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                switch(x){
        
                }
        
                switch(y){
                    default:
                        hello();
                }
        
        
                switch(y){
                    case 42:{
                        hello();
                    }
                }
        
                switch(z){
                    case 0:
                        break A;
                    case 1:
                        world();
                    case 4:
                    case 42:
                        hello();
                        break;
                    case -1:
                    {
                        return 42;
                    }
                    case -42:
                        continue A;
                    case 99:
                    {
                        hello();
                    }
                    {
                        continue;
                    }
                    case 123:
                        return;
                    default:
                        hello();
                }
        
                var today = "";
                switch(day){
                    case 6, 7 -> today = "Weekend day";
                    case 1, 2, 3, 4, 5 -> today = "Working day";
                    default -> throw new IllegalArgumentException("Invalid day: " + day.name());
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
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "x",
                                            var: false
                                        },
                                        statements: []
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y",
                                            var: false
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: [],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y",
                                            var: false
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
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
                                                                identifier: "hello",
                                                                var: false
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "z",
                                            var: false
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "0"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: {
                                                    node: "SimpleName",
                                                    identifier: "A",
                                                    var: false
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world",
                                                        var: false
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "4"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ContinueStatement",
                                                label: {
                                                    node: "SimpleName",
                                                    identifier: "A",
                                                    var: false
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "99"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
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
                                                                identifier: "hello",
                                                                var: false
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ContinueStatement",
                                                        label: null
                                                    }
                                                ]
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "123"
                                                    }
                                                ],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ReturnStatement",
                                                expression: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [],
                                                switchLabeledRule: false
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello",
                                                        var: false
                                                    },
                                                    arguments: []
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
                                                    identifier: "today",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"\""
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "day",
                                            var: false
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "6"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "7"
                                                    }
                                                ],
                                                switchLabeledRule: true
                                            },
                                            {
                                                node: "YieldStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "today",
                                                        var: false
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"Weekend day\""
                                                    }
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "2"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "4"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    }
                                                ],
                                                switchLabeledRule: true
                                            },
                                            {
                                                node: "YieldStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "today",
                                                        var: false
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"Working day\""
                                                    }
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: [],
                                                switchLabeledRule: true
                                            },
                                            {
                                                node: "ThrowStatement",
                                                expression: {
                                                    node: "ClassInstanceCreation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "IllegalArgumentException",
                                                            var: false
                                                        }
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"Invalid day: \""
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "day",
                                                                    var: false
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "name",
                                                                    var: false
                                                                },
                                                                arguments: []
                                                            },
                                                        }
                                                    ],
                                                    anonymousClassDeclaration: null
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
