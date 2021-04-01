const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EnumConstantsWithAnnotationWithArguments", () => {
    const src = multiline(() => {/*
        enum Coin {
            @annotation T,PENNY(1L), NICKEL(), DIME(-42), QUARTER(0b11);
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
                    node: "EnumDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Coin",
                        var: false
                    },
                    superInterfaceTypes: [],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [
                                {
                                    node: "MarkerAnnotation",
                                    typeName: {
                                        node: "SimpleName",
                                        identifier: "annotation",
                                        var: false
                                    }
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "T",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "PENNY",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "1L"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "NICKEL",
                                var: false
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "DIME",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "PrefixExpression",
                                    operator: "-",
                                    operand: {
                                        node: "NumberLiteral",
                                        token: "42"
                                    }
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "QUARTER",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0b11"
                                }
                            ],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: []
                }
            ],
            module: null
        };
    expect(output).toEqual(ground_truth);
});
