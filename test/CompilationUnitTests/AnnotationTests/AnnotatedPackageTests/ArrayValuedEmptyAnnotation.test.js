const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ArrayValuedEmptyAnnotation", () => {
    const src = multiline(() => {/*
        @Endorsers({})
        package hello;
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
                        node: "SingleMemberAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "Endorsers",
                            var: false
                        },
                        value: {
                            node: "ArrayInitializer",
                            expressions: []
                        }
                    }
                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello",
                    var: false
                }
            },
            imports: [],
            types: [],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
