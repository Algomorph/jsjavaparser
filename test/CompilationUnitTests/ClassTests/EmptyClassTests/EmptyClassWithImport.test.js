const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithImport", () => {
    const src = multiline(() => {/*
        import hello;
        public class Hello {}
        */
    });
      const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: null,
            imports: [
                {
                    node: "ImportDeclaration",
                    static: false,
                    name: {
                        node: "SimpleName",
                        identifier: "hello",
                        var: false
                    },
                    onDemand: false
                }
            ],
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
