const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithoutTypesWithDots", () => {
    const src = multiline(() => {/*
        package a.b.c;
        */
    });
    const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "QualifiedName",
                        qualifier: {
                            node: "SimpleName",
                            identifier: "a",
                            var: false
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "b",
                            var: false
                        }
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "c",
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
