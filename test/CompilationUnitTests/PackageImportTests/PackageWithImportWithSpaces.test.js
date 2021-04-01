const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithImportWithSpaces", () => {
    const src = multiline(() => {/*
        package hello . world;
        
        import static hello. *;
        import org.hello . world;
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
            imports: [
                {
                    node: "ImportDeclaration",
                    static: true,
                    name: {
                        node: "SimpleName",
                        identifier: "hello",
                        var: false
                    },
                    onDemand: true
                },
                {
                    node: "ImportDeclaration",
                    static: false,
                    name: {
                        node: "QualifiedName",
                        qualifier: {
                            node: "QualifiedName",
                            qualifier: {
                                node: "SimpleName",
                                identifier: "org",
                                var: false
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "hello",
                                var: false
                            }
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "world",
                            var: false
                        }
                    },
                    onDemand: false
                }
            ],
            types: [],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
