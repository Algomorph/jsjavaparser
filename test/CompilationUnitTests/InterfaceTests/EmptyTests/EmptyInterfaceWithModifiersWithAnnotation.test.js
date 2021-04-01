const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyInterfaceWithModifiersWithAnnotation", () => {
    const src = multiline(() => {/*
        @Author(@Name(first = "Joe", last = "Hacker"))
        protected interface Test {}
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
                    modifiers: [
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
                        },
                        {
                            node: "Modifier",
                            keyword: "protected"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
