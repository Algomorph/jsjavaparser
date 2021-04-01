const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MarkerAnnotationTypeWithInterface", () => {
    const src = multiline(() => {/*
        @interface Preliminary { private interface ITest {}}
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
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
