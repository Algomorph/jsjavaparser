const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithMarkerAnnotation", () => {
    const src = multiline(() => {/*
        @hello
        package hello.world;
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "MarkerAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "hello",
                            var: false
                        }
                    }
                ],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "SimpleName",
                        identifier: "hello",
                        var: false
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "world",
                        var: false
                    }
                }
            },
            imports: [],
            types: [],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
