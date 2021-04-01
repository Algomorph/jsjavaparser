const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithNormalEmptyAnnotations", () => {
    const src = multiline(() => {/*
        @RequestForEnhancement()
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
                        node: "NormalAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "RequestForEnhancement",
                            var: false
                        },
                        values: []
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
