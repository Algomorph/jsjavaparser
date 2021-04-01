const JavaParser = require('../../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("ExtendsWithQualifiedGeneric", () => {
    const src = multiline(() => {/*
        class Hello extends Foo.Bar<T> {}
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
                    typeParameters: [],
                    superclassType: {
                        node: "ParameterizedType",
                        type: {
                            node: "SimpleType",
                            annotations: [],
                            name: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "Foo",
                                    var: false
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "Bar",
                                    var: false
                                }
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
                    },
                    superInterfaceTypes: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
