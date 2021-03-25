const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithGenericWithGeneric", () => {
    const src = multiline(() => {/*
        class Hello<T,T2 extends A<T>> {}
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
                        identifier: "Hello",
                        var: false
                    },
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
                        },
                        {
                            node: "TypeParameter",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T2",
                                var: false
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A",
                                            var: false
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "T",
                                                var: false
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
