const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("PackageWithNormalAnnotations", () => {
    const src = multiline(() => {/*
        @RequestForEnhancement(
                id = 2868724,
                synopsis = "Provide time-travel functionality",
                engineer = "Mr. Peabody",
                date = "4/1/2004"
        )
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
                        values: [
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "id",
                                    var: false
                                },
                                value: {
                                    node: "NumberLiteral",
                                    token: "2868724"
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "synopsis",
                                    var: false
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"Provide time-travel functionality\""
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "engineer",
                                    var: false
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"Mr. Peabody\""
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "date",
                                    var: false
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"4\/1\/2004\""
                                }
                            }
                        ]
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
