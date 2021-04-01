const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MakerAnnotationTypeWithDefaultWithModifier", () => {
    const src = multiline(() => {/*
        public @interface RequestForEnhancement {
            @interface ClassPreamble {
                String author();
                String date();
                int currentRevision() default 1;
                String lastModified() default "N/A";
                String lastModifiedBy() default "N/A";
                // Note use of array
                String[] reviewers();
            }
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
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "RequestForEnhancement",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "ClassPreamble",
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
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "author",
                                        var: false
                                    },
                                    default: null
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "date",
                                        var: false
                                    },
                                    default: null
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "int"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "currentRevision",
                                        var: false
                                    },
                                    default: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "lastModified",
                                        var: false
                                    },
                                    default: {
                                        node: "StringLiteral",
                                        escapedValue: "\"N\/A\""
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "lastModifiedBy",
                                        var: false
                                    },
                                    default: {
                                        node: "StringLiteral",
                                        escapedValue: "\"N\/A\""
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        elementType: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String",
                                                var: false
                                            }
                                        },
                                        dimensions: [
                                            {
                                                node: "Dimension",
                                                annotations: []
                                            }
                                        ]
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "reviewers",
                                        var: false
                                    },
                                    default: null
                                }
                            ]
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
