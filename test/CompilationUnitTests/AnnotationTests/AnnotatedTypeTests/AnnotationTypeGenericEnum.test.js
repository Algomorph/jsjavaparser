const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("AnnotationTypeGenericEnum", () => {
    const src = multiline(() => {/*
        interface Formatter {}
        
        @interface PrettyPrinter {
            Class<? extends Formatter> value();
        }
        
        @interface Quality {
            enum Level { BAD, INDIFFERENT, GOOD }
            Level value();
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
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Formatter",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                },
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "PrettyPrinter",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Class",
                                        var: false
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "WildcardType",
                                        annotations: [],
                                        bound: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Formatter",
                                                var: false
                                            }
                                        },
                                        upperBound: true
                                    }
                                ]
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
                        identifier: "Quality",
                        var: false
                    },
                    bodyDeclarations: [
                        {
                            node: "EnumDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "Level",
                                var: false
                            },
                            superInterfaceTypes: [],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "BAD",
                                        var: false
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "INDIFFERENT",
                                        var: false
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "GOOD",
                                        var: false
                                    },
                                    arguments: [],
                                    anonymousClassDeclaration: null
                                }
                            ],
                            bodyDeclarations: []
                        },
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [],
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "Level",
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
