const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("GenericInterfaceGenericMethodMember", () => {
    const src = multiline(() => {/*
        public interface Service {
            <F> void executeService();
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
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service",
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
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "F",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                annotations: [],
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
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
