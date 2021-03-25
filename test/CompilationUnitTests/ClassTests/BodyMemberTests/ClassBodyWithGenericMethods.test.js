const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithGenericMethods", () => {
    const src = multiline(() => {/*
        private final class Test {
            protected final <T> void fromArrayToCollection(T[] a, Collection<T> c) {
                for (T o : a) {
                    c.add(o);
                }
                add(o);
                c.f.add(o);
                c.f.r.t.add(o.d);
            }
            public abstract <T,K> T[][] get () throws Exception;
            abstract <H,W> void set (H[][][] hello, W world);
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
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "fromArrayToCollection",
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
                                                identifier: "T",
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
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Collection",
                                                var: false
                                            }
                                        },
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
                                        ]
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
                                statements: [
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [],
                                            type: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T",
                                                    var: false
                                                }
                                            },
                                            varargsAnnotations: [],
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "o",
                                                var: false
                                            },
                                            extraDimensions2: [],
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "a",
                                            var: false
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "c",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "add",
                                                            var: false
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "SimpleName",
                                                                identifier: "o",
                                                                var: false
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "o",
                                                    var: false
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "c",
                                                    var: false
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "f",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "o",
                                                    var: false
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "c",
                                                            var: false
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "f",
                                                            var: false
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "r",
                                                        var: false
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "t",
                                                    var: false
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "add",
                                                var: false
                                            },
                                            arguments: [
                                                {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "o",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "d",
                                                        var: false
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
                                        var: false
                                    },
                                    typeBounds: []
                                },
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "K",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "ArrayType",
                                elementType: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
                                        var: false
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
                                    }
                                ]
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "get",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
                            extraDimensions2: [],
                            thrownExceptionTypes: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Exception",
                                        var: false
                                    }
                                }
                            ],
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
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "H",
                                        var: false
                                    },
                                    typeBounds: []
                                },
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "W",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "set",
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
                                                identifier: "H",
                                                var: false
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
                                        identifier: "hello",
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
                                            identifier: "W",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "world",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
