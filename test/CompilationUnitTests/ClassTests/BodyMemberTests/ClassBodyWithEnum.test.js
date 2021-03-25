const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithEnum", () => {
    const src = multiline(() => {/*
        public class MyClass {
            public final enum Season { WINTER, SPRING, SUMMER,  FALL }
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
                        identifier: "MyClass",
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
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "Season",
                                var: false
                            },
                            superInterfaceTypes: [],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "WINTER",
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
                                        identifier: "SPRING",
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
                                        identifier: "SUMMER",
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
                                        identifier: "FALL",
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
