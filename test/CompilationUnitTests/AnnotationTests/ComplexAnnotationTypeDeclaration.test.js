const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ComplexAnnotationTypeDeclaration", () => {
    const src = multiline(() => {/*
        @Target(ElementType.METHOD)
        public @interface ReallyComplexAnnotation {
            public SimpleAnnotation value() default @SimpleAnnotation(a="...");
        }
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
                    modifiers: [
                        {
                            node: "SingleMemberAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Target",
                                var: false
                            },
                            value: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "ElementType",
                                    var: false
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "METHOD",
                                    var: false
                                }
                            }
                        },
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "ReallyComplexAnnotation",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "SimpleAnnotation",
                                    var: false
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value",
                                var: false
                            },
                            default: {
                                node: "NormalAnnotation",
                                typeName: {
                                    node: "SimpleName",
                                    identifier: "SimpleAnnotation",
                                    var: false
                                },
                                values: [
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "a",
                                            var: false
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"...\""
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
