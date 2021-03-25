const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithInterface", () => {
    const src = multiline(() => {/*
        abstract class MyClass {
            private interface Hello {
                void World();
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
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "abstract"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            interface: true,
                            name: {
                                node: "SimpleName",
                                identifier: "Hello",
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
                                        primitiveTypeCode: "void"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "World",
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
                    ]
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
