const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("AnnotationTypeList", () => {
    const src = multiline(() => {/*
        @interface Ping { Pong value(); }
        @interface Pong { Ping value(); }
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
                    node: "AnnotationTypeDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Ping",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Pong",
                                    var: false
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value",
                                var: false
                            },
                            default: null
                        }
                    ]
                },
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Pong",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Ping",
                                    var: false
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value",
                                var: false
                            },
                            default: null
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
