const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassVariableDeclarationMixed", () => {
    const src = multiline(() => {/*
        public class Test {
            private static int a;
            static int b[];
            List<?> c[];
            Map<int[], List<?>> d;
            Map<String, List<? extends Hello.World>> d;
        
            int a = 42;
            float a1 = 42, a2 = a1;
            private Object a2 = new Object();
            Object a3 = new <T>Object();
            Object a4 = new <T1,T2>Object();
            static private Runnable r = new Runnable() {
                @Override
                public void run() {
                    // TODO Auto-generated method stub
        
                }
            };
            Object[] b = new java.lang.Object[0];
            int b1[] = new int[]{0,1,2};
            int b2[] = new int[5];
            int b3[][] = new int[5][b1.length];
            int b4[][][] = new int[5][6][];
            List<?> c = new ArrayList<String>();
            List<String> c1 = new java.util.ArrayList<>();
            List<?> c[][] = new List<?>[][] {{new ArrayList<String>()}};
            Map<int[], List<?>> d = null;
            Map<String, List<? extends java.lang.String>> e = new HashMap<>();
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
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
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
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ]
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
                                        identifier: "b",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "List",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "WildcardType",
                                        annotations: [],
                                        bound: null,
                                        upperBound: true
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Map",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
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
                                    },
                                    {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List",
                                                var: false
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                annotations: [],
                                                bound: null,
                                                upperBound: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "d",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Map",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List",
                                                var: false
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                annotations: [],
                                                bound: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
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
                                                    }
                                                },
                                                upperBound: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "d",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ]
                        },
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
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "42"
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
                                        identifier: "a1",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "42"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a2",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "SimpleName",
                                        identifier: "a1",
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
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Object",
                                    var: false
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a2",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Object",
                                                var: false
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Object",
                                    var: false
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a3",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T",
                                                    var: false
                                                }
                                            }
                                        ],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Object",
                                                var: false
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Object",
                                    var: false
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a4",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T1",
                                                    var: false
                                                }
                                            },
                                            {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T2",
                                                    var: false
                                                }
                                            }
                                        ],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Object",
                                                var: false
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Runnable",
                                    var: false
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "r",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Runnable",
                                                var: false
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: {
                                            node: "AnonymousClassDeclaration",
                                            bodyDeclarations: [
                                                {
                                                    node: "MethodDeclaration",
                                                    modifiers: [
                                                        {
                                                            node: "MarkerAnnotation",
                                                            typeName: {
                                                                node: "SimpleName",
                                                                identifier: "Override",
                                                                var: false
                                                            }
                                                        },
                                                        {
                                                            node: "Modifier",
                                                            keyword: "public"
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
                                                        identifier: "run",
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
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ArrayType",
                                elementType: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Object",
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
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ArrayCreation",
                                        type: {
                                            node: "ArrayType",
                                            elementType: {
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
                                                            identifier: "lang",
                                                            var: false
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Object",
                                                        var: false
                                                    }
                                                }
                                            },
                                            dimensions: [
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                }
                                            ]
                                        },
                                        dimensions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            }
                                        ],
                                        initializer: null
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
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b1",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: {
                                        node: "ArrayCreation",
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
                                        },
                                        dimensions: [],
                                        initializer: {
                                            node: "ArrayInitializer",
                                            expressions: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "1"
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "2"
                                                }
                                            ]
                                        }
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
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b2",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: {
                                        node: "ArrayCreation",
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
                                        },
                                        dimensions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "5"
                                            }
                                        ],
                                        initializer: null
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
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b3",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        },
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: {
                                        node: "ArrayCreation",
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
                                                }
                                            ]
                                        },
                                        dimensions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "5"
                                            },
                                            {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "b1",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "length",
                                                    var: false
                                                }
                                            }
                                        ],
                                        initializer: null
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
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b4",
                                        var: false
                                    },
                                    extraDimensions2: [
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
                                    ],
                                    initializer: {
                                        node: "ArrayCreation",
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
                                        },
                                        dimensions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "5"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "6"
                                            }
                                        ],
                                        initializer: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "List",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "WildcardType",
                                        annotations: [],
                                        bound: null,
                                        upperBound: true
                                    }
                                ]
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
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
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
                                                        identifier: "String",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "List",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
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
                                        identifier: "c1",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "ParameterizedType",
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
                                                        identifier: "ArrayList",
                                                        var: false
                                                    }
                                                }
                                            },
                                            typeArguments: []
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "List",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "WildcardType",
                                        annotations: [],
                                        bound: null,
                                        upperBound: true
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c",
                                        var: false
                                    },
                                    extraDimensions2: [
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        },
                                        {
                                            node: "Dimension",
                                            annotations: []
                                        }
                                    ],
                                    initializer: {
                                        node: "ArrayCreation",
                                        type: {
                                            node: "ArrayType",
                                            elementType: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "List",
                                                        var: false
                                                    }
                                                },
                                                typeArguments: [
                                                    {
                                                        node: "WildcardType",
                                                        annotations: [],
                                                        bound: null,
                                                        upperBound: true
                                                    }
                                                ]
                                            },
                                            dimensions: [
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                },
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                }
                                            ]
                                        },
                                        dimensions: [],
                                        initializer: {
                                            node: "ArrayInitializer",
                                            expressions: [
                                                {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
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
                                                                            identifier: "String",
                                                                            var: false
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            arguments: [],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Map",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
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
                                    },
                                    {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List",
                                                var: false
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                annotations: [],
                                                bound: null,
                                                upperBound: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "d",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NullLiteral"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Map",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List",
                                                var: false
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                annotations: [],
                                                bound: {
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
                                                                identifier: "lang",
                                                                var: false
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String",
                                                            var: false
                                                        }
                                                    }
                                                },
                                                upperBound: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "e",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "HashMap",
                                                    var: false
                                                }
                                            },
                                            typeArguments: []
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
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
