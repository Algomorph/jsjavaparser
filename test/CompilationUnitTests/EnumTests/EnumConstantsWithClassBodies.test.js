const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EnumConstantsWithClassBodies", () => {
    const src = multiline(() => {/*
        enum Operation {
            PLUS { public double a;},
            MINUS {int b;},
            TIMES {Object c;},
            DIVIDED_BY{;};
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
                        identifier: "Operation",
                        var: false
                    },
                    superInterfaceTypes: [],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "PLUS",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
                                    {
                                        node: "FieldDeclaration",
                                        modifiers: [
                                            {
                                                node: "Modifier",
                                                keyword: "public"
                                            }
                                        ],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "double"
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
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "MINUS",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
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
                                                    identifier: "b",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "TIMES",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
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
                                                    identifier: "c",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "DIVIDED_BY",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: []
                            }
                        }
                    ],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
