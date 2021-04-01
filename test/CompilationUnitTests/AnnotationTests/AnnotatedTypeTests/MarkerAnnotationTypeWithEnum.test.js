const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MarkerAnnotationTypeWithEnum", () => {
    const src = multiline(() => {/*
        @interface Preliminary { private enum TestEnum {A,B}}
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
                            node: "EnumDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "TestEnum",
                                var: false
                            },
                            superInterfaceTypes: [],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A",
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
                                        identifier: "B",
                                        var: false
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                }
                            ],
                            bodyDeclarations: []
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
