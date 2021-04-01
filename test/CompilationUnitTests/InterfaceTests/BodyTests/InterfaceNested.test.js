const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("InterfaceNested", () => {
    const src = multiline(() => {/*
        interface Map {
            interface Entry {
                int getKey();
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
                    modifiers: [],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Map",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [],
                            interface: true,
                            name: {
                                node: "SimpleName",
                                identifier: "Entry",
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
                                        identifier: "getKey",
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
