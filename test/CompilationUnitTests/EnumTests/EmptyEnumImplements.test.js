const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EmptyEnumImplements", () => {
    const src = multiline(() => {/*
        enum Color implements ITest<A> {}
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
                    node: "EnumDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Color",
                        var: false
                    },
                    superInterfaceTypes: [
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                annotations: [],
                                name: {
                                    node: "SimpleName",
                                    identifier: "ITest",
                                    var: false
                                }
                            },
                            typeArguments: [
                                {
                                    node: "SimpleType",
                                    annotations: [],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A",
                                        var: false
                                    }
                                }
                            ]
                        }
                    ],
                    enumConstants: [],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
