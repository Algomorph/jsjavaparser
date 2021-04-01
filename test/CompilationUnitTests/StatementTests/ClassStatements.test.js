const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassStatements", () => {
    const src = multiline(() => {/*
        class Test {
            { private class World {} };
            static {
                final class Hello {}
                int i = 42;
            }
            { public static class Hello1 {public enum Enum {}} }
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
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "private"
                                                }
                                            ],
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "World",
                                                var: false
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: []
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "Initializer",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                }
                                            ],
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Hello",
                                                var: false
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: []
                                        }
                                    },
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
                                                    identifier: "i",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        ]
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
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
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
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Hello1",
                                                var: false
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: [
                                                {
                                                    node: "EnumDeclaration",
                                                    modifiers: [
                                                        {
                                                            node: "Modifier",
                                                            keyword: "public"
                                                        }
                                                    ],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Enum",
                                                        var: false
                                                    },
                                                    superInterfaceTypes: [],
                                                    enumConstants: [],
                                                    bodyDeclarations: []
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
