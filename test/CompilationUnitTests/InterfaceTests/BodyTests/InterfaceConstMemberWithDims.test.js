const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("InterfaceConstMemberWithDims", () => {
    const src = multiline(() => {/*
        interface Test {
            Object[][] n[][][] = 42;
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
                    interface: true,
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
                                        identifier: "n",
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
                                        node: "NumberLiteral",
                                        token: "42"
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
