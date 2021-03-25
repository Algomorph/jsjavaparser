const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithGenericPrimitiveDims", () => {
    const src = multiline(() => {/*
        class Hello<E extends A<double[][][]>>{};
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
                                                node: "PrimitiveType",
                                                annotations: [],
                                                primitiveTypeCode: "double"
                                            },
                                            dimensions: [
                                                {
                                                    node: "Dimension",
                                                    annotations: []
                                                },
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
