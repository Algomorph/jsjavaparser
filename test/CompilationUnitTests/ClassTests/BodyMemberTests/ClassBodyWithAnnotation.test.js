const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithAnnotation", () => {
    const src = multiline(() => {/*
        public class MyClass {
            @interface Preliminary { private interface ITest {}}
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
                                    interface: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "ITest",
                                        var: false
                                    },
                                    typeParameters: [],
                                    superclassType: null,
                                    superInterfaceTypes: [],
                                    bodyDeclarations: []
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
