const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithSingleElementAnnotations", () => {
    const src = multiline(() => {/*
        @Copyright("2002 Yoyodyne Propulsion Systems, Inc.")
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
                            identifier: "Copyright",
                            var: false
                        },
                        value: {
                            node: "StringLiteral",
                            escapedValue: "\"2002 Yoyodyne Propulsion Systems, Inc.\""
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
