const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("SingleElementArrayValuedSingleElementAnnotation", () => {
    const src = multiline(() => {/*
        @Endorsers("Epicurus")
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
                            node: "StringLiteral",
                            escapedValue: "\"Epicurus\""
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
