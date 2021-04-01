const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("TryResourceStatements", () => {
    const src = multiline(() => {/*
        public class Test {
            public static void main(String[] args) {
                try (BufferedReader br =
                             new BufferedReader(new FileReader(path))) {
                    return br.readLine();
                }
                try (final BufferedReader br =
                             new BufferedReader(new FileReader(path))) {
                    return br.readLine();
                } catch (Exception ex){
                    hello(ex);
                }
        
                try (final BufferedReader br =
                             new BufferedReader(new FileReader(path))) {
                    return br.readLine();
                } finally {
                    hello();
                }
        
                try (final BufferedReader br =
                             new BufferedReader(new FileReader(path))) {
                    return br.readLine();
                } catch (Hello | World ex) {
                    hello.world();
                } catch (Exception ex) {
                    hello(ex);
                } finally {
                    hello();
                }
        
                try (final @ann BufferedReader br =
                             new BufferedReader(new FileReader(path))) {
                    return br.readLine();
                }
        
                try (
                        java.util.zip.ZipFile zf = new java.util.zip.ZipFile(zipFileName);
                        final java.io.BufferedWriter writer = java.nio.file.Files.newBufferedWriter(outputFilePath, charset)
                )
                {
                    // Enumerate each entry
                    for (java.util.Enumeration entries =
                         zf.entries(); entries.hasMoreElements();) {
                        // Get the entry name and write it to the output file
                        String newLine = System.getProperty("line.separator");
                        String zipEntryName = ((java.util.zip.ZipEntry)entries.nextElement()).getName() + newLine;
                        writer.write(zipEntryName, 0, zipEntryName.length());
                    }
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
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader",
                                                        var: false
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br",
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
                                                                    identifier: "BufferedReader",
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
                                                                            identifier: "FileReader",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader",
                                                        var: false
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br",
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
                                                                    identifier: "BufferedReader",
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
                                                                            identifier: "FileReader",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Exception",
                                                            var: false
                                                        }
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
                                                },
                                                body: {
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
                                                                arguments: [
                                                                    {
                                                                        node: "SimpleName",
                                                                        identifier: "ex",
                                                                        var: false
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader",
                                                        var: false
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br",
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
                                                                    identifier: "BufferedReader",
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
                                                                            identifier: "FileReader",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: {
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
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader",
                                                        var: false
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br",
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
                                                                    identifier: "BufferedReader",
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
                                                                            identifier: "FileReader",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello",
                                                                    var: false
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                annotations: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "World",
                                                                    var: false
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
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
                                                                    identifier: "hello",
                                                                    var: false
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world",
                                                                    var: false
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        annotations: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Exception",
                                                            var: false
                                                        }
                                                    },
                                                    varargsAnnotations: [],
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex",
                                                        var: false
                                                    },
                                                    extraDimensions2: [],
                                                    initializer: null
                                                },
                                                body: {
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
                                                                arguments: [
                                                                    {
                                                                        node: "SimpleName",
                                                                        identifier: "ex",
                                                                        var: false
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: {
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
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    },
                                                    {
                                                        node: "MarkerAnnotation",
                                                        typeName: {
                                                            node: "SimpleName",
                                                            identifier: "ann",
                                                            var: false
                                                        }
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader",
                                                        var: false
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br",
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
                                                                    identifier: "BufferedReader",
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
                                                                            identifier: "FileReader",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path",
                                                                            var: false
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "SimpleType",
                                                    annotations: [],
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
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
                                                                identifier: "zip",
                                                                var: false
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "ZipFile",
                                                            var: false
                                                        }
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "zf",
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
                                                                    node: "QualifiedName",
                                                                    qualifier: {
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
                                                                            identifier: "zip",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "ZipFile",
                                                                        var: false
                                                                    }
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "zipFileName",
                                                                    var: false
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
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
                                                                identifier: "io",
                                                                var: false
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BufferedWriter",
                                                            var: false
                                                        }
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "writer",
                                                            var: false
                                                        },
                                                        extraDimensions2: [],
                                                        initializer: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "QualifiedName",
                                                                qualifier: {
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
                                                                            identifier: "nio",
                                                                            var: false
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "file",
                                                                        var: false
                                                                    }
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Files",
                                                                    var: false
                                                                }
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "newBufferedWriter",
                                                                var: false
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "outputFilePath",
                                                                    var: false
                                                                },
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "charset",
                                                                    var: false
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ForStatement",
                                                    initializers: [
                                                        {
                                                            node: "VariableDeclarationExpression",
                                                            modifiers: [],
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
                                                                        identifier: "Enumeration",
                                                                        var: false
                                                                    }
                                                                }
                                                            },
                                                            fragments: [
                                                                {
                                                                    node: "VariableDeclarationFragment",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "entries",
                                                                        var: false
                                                                    },
                                                                    extraDimensions2: [],
                                                                    initializer: {
                                                                        node: "MethodInvocation",
                                                                        expression: {
                                                                            node: "SimpleName",
                                                                            identifier: "zf",
                                                                            var: false
                                                                        },
                                                                        typeArguments: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "entries",
                                                                            var: false
                                                                        },
                                                                        arguments: []
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "entries",
                                                            var: false
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hasMoreElements",
                                                            var: false
                                                        },
                                                        arguments: []
                                                    },
                                                    updaters: [],
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "VariableDeclarationStatement",
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
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "newLine",
                                                                            var: false
                                                                        },
                                                                        extraDimensions2: [],
                                                                        initializer: {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "System",
                                                                                var: false
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "getProperty",
                                                                                var: false
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    node: "StringLiteral",
                                                                                    escapedValue: "\"line.separator\""
                                                                                }
                                                                            ]
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
                                                                        identifier: "String",
                                                                        var: false
                                                                    }
                                                                },
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "zipEntryName",
                                                                            var: false
                                                                        },
                                                                        extraDimensions2: [],
                                                                        initializer: {
                                                                            node: "InfixExpression",
                                                                            leftOperand: {
                                                                                node: "MethodInvocation",
                                                                                expression: {
                                                                                    node: "ParenthesizedExpression",
                                                                                    expression: {
                                                                                        node: "CastExpression",
                                                                                        type: {
                                                                                            node: "SimpleType",
                                                                                            annotations: [],
                                                                                            name: {
                                                                                                node: "QualifiedName",
                                                                                                qualifier: {
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
                                                                                                        identifier: "zip",
                                                                                                        var: false
                                                                                                    }
                                                                                                },
                                                                                                name: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "ZipEntry",
                                                                                                    var: false
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        expression: {
                                                                                            node: "MethodInvocation",
                                                                                            expression: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "entries",
                                                                                                var: false
                                                                                            },
                                                                                            typeArguments: [],
                                                                                            name: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "nextElement",
                                                                                                var: false
                                                                                            },
                                                                                            arguments: []
                                                                                        }
                                                                                    }
                                                                                },
                                                                                typeArguments: [],
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "getName",
                                                                                    var: false
                                                                                },
                                                                                arguments: []
                                                                            },
                                                                            operator: "+",
                                                                            rightOperand: {
                                                                                node: "SimpleName",
                                                                                identifier: "newLine",
                                                                                var: false
                                                                            },
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: {
                                                                        node: "SimpleName",
                                                                        identifier: "writer",
                                                                        var: false
                                                                    },
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "write",
                                                                        var: false
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "zipEntryName",
                                                                            var: false
                                                                        },
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "0"
                                                                        },
                                                                        {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "zipEntryName",
                                                                                var: false
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "length",
                                                                                var: false
                                                                            },
                                                                            arguments: []
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
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
