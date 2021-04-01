const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyEnumWithBodyWithMembers", () => {
    const src = multiline(() => {/*
        enum Color {
            RED, GREEN, BLUE;
            private  int value;
            static Object obj[][];
            static Object[] test;
            Object[][] testdims[];
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
                    node: "EnumDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Color",
                        var: false
                    },
                    superInterfaceTypes: [],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "RED",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "GREEN",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "BLUE",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
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
                                        identifier: "value",
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
                                        identifier: "obj",
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
                                        identifier: "test",
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
                                    },
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
                                        identifier: "testdims",
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
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
