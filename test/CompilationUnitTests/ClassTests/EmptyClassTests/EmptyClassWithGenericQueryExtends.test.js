const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyClassWithGenericQueryExtends", () => {
    const src = multiline(() => {/*
        class Hello<T extends Object & Comparable<? extends T>> {}
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
                            typeBounds: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Object",
                                        var: false
                                    }
                                },
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        annotations: [],
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Comparable",
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
                                                    identifier: "T",
                                                    var: false
                                                }
                                            },
                                            upperBound: true
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
