const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassFormalParametersWithConstructor", () => {
    const src = multiline(() => {/*
        abstract class Test {
            Test() {
            }
        
            Test(int a) {
            }
        
            Test(int a, String b) {
            }
        
            Test(int[] a, String b[]) {
            }
        
            Test(final int a, final java.lang.String[][][] b[], float c) {
            }
        
            Test(int... f) {
            }
        
            Test(double n, final int[]... g) {
            }
        
            Test(double n, final List<int[]>... g) {
            }
        
            abstract void World();
        
            abstract void World(@annotation int a);
        
            abstract void World(int a, String b);
        
            abstract void World(int[] a, final @annotation  String b[]);
        
            abstract void World(final int a, final java.lang.String[][][] b[], float c);
        
            abstract void World(int... f);
        
            abstract void World(double n, final int[]... g);
        
            void World(double n, final List<int[]>... g) {
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
                            keyword: "abstract"
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
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
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
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
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
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
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
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
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
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                                    identifier: "String",
                                                    var: false
                                                }
                                            }
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
                                    varargsAnnotations: [],
                                    varargs: false,
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
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "float"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        primitiveTypeCode: "double"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test",
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
                                        primitiveTypeCode: "double"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                        ]
                                    },
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g",
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
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation",
                                                var: false
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
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
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
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
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
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
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        },
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation",
                                                var: false
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
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
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
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
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                                    identifier: "String",
                                                    var: false
                                                }
                                            }
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
                                    varargsAnnotations: [],
                                    varargs: false,
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
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "float"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
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
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
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
                                identifier: "World",
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
                                        primitiveTypeCode: "double"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World",
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
                                        primitiveTypeCode: "double"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
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
                                        ]
                                    },
                                    varargsAnnotations: [],
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g",
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
                                statements: []
                            }
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
