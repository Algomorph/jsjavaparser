const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("Extends", () => {
    const src = multiline(() => {/*
        class Hello extends World {}
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
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: {
                        node: "SimpleType",
                        annotations: [],
                        name: {
                            node: "SimpleName",
                            identifier: "World",
                            var: false
                        }
                    },
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
