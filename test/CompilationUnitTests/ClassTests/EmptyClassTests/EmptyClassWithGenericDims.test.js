const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithGenericDims", () => {
    const src = multiline(() => {/*
        class Hello<E extends A<D.B[][]>>{}
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
                                identifier: "E",
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
                                            node: "ArrayType",
                                            elementType: {
                                                node: "SimpleType",
                                                annotations: [],
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "D",
                                                        var: false
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "B",
                                                        var: false
                                                    }
                                                }
                                            },
                                            dimensions: [
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                },
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                }
                                            ]
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
