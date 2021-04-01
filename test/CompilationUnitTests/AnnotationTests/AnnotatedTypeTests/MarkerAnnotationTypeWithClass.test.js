const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MarkerAnnotationTypeWithClass", () => {
    const src = multiline(() => {/*
        @interface Preliminary { private class TestClass { final int i = 42; }}
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
                    node: "AnnotationTypeDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary",
                        var: false
                    },
                    bodyDeclarations: [
                        {
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
                                identifier: "TestClass",
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
                                            keyword: "final"
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
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
