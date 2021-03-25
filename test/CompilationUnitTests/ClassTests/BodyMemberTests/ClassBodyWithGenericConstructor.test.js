const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ClassBodyWithGenericConstructor", () => {
    const src = multiline(() => {/*
        class MyClass<X> {
            <T> MyClass(T t) {
            }
            <T> MyClass() throws A {
                ;
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
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MyClass",
                        var: false
                    },
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "X",
                                var: false
                            },
                            typeBounds: []
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "MyClass",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "T",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "t",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ],
                            extraDimensions2: [],
                            thrownExceptionTypes: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    modifiers: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T",
                                        var: false
                                    },
                                    typeBounds: []
                                }
                            ],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "MyClass",
                                var: false
                            },
                            receiverType: null,
                            receiverQualifier: null,
                            parameters: [],
                            extraDimensions2: [],
                            thrownExceptionTypes: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A",
                                        var: false
                                    }
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EmptyStatement"
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
