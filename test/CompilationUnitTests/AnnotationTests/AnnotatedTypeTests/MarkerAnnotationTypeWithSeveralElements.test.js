const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("MarkerAnnotationTypeWithSeveralElements", () => {
    const src = multiline(() => {/*
        @interface RequestForEnhancement {
            int id();
            // Unique ID number associated with RFE
            String synopsis(); // Synopsis of RFE
            String engineer(); // Name of engineer who implemented RFE
            String date();
            double pi = 3.14;
            // Date RFE was implemented
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
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "RequestForEnhancement",
                        var: false
                    },
                    bodyDeclarations: [
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
                                identifier: "id",
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
                                identifier: "synopsis",
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
                                identifier: "engineer",
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
                            node: "FieldDeclaration",
                            modifiers: [],
                            type: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "double"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "pi",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "3.14"
                                    }
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
