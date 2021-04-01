const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("InterfaceMethodMemberAnnotation", () => {
    const src = multiline(() => {/*
        interface Test {
            int world(@MyAnnotation(name = "test") int a);
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
                        identifier: "Test",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "NormalAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "MyAnnotation",
                                                var: false
                                            },
                                            values: [
                                                {
                                                    node: "MemberValuePair",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "name",
                                                        var: false
                                                    },
                                                    value: {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"test\""
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        annotations: [],
                                        primitiveTypeCode: "int"
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: null
                        }
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
