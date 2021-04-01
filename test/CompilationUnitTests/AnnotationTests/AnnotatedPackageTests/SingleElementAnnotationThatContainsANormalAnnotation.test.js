const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("SingleElementAnnotationThatContainsANormalAnnotation", () => {
    const src = multiline(() => {/*
        @Author(@Name(first = "Joe", last = "Hacker"))
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
                            identifier: "Author",
                            var: false
                        },
                        value: {
                            node: "NormalAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Name",
                                var: false
                            },
                            values: [
                                {
                                    node: "MemberValuePair",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "first",
                                        var: false
                                    },
                                    value: {
                                        node: "StringLiteral",
                                        escapedValue: "\"Joe\""
                                    }
                                },
                                {
                                    node: "MemberValuePair",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "last",
                                        var: false
                                    },
                                    value: {
                                        node: "StringLiteral",
                                        escapedValue: "\"Hacker\""
                                    }
                                }
                            ]
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
