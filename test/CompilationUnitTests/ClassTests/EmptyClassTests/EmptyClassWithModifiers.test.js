const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithModifiers", () => {
    const src = multiline(() => {/*
        // semicolon is intentional
        public final class Hello {};
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
                        },
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
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
