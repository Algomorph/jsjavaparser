const JavaParser = require('../../../lib/javaparser15_node.js');
const multiline = require('multiline')

test("EnumConstantsWithArguments", () => {
    const src = multiline(() => {/*
        enum Coin {
            T,PENNY(1L), NICKEL(), DIME(0x10,-42), QUARTER(0b11),
            R(0222), R1(true), R5(false), R3(null), R4(3.14), T('a'),
            T1("hello\u1984"), T34(-0x1.8p1);
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
                            modifiers: [],
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
                                    node: "NumberLiteral",
                                    token: "0x10"
                                },
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
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0222"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R1",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "BooleanLiteral",
                                    booleanValue: true
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R5",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "BooleanLiteral",
                                    booleanValue: false
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R3",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "NullLiteral"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R4",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "3.14"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "CharacterLiteral",
                                    escapedValue: "'a'"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T1",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "StringLiteral",
                                    escapedValue: "\"hello\\u1984\""
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T34",
                                var: false
                            },
                            arguments: [
                                {
                                    node: "PrefixExpression",
                                    operator: "-",
                                    operand: {
                                        node: "NumberLiteral",
                                        token: "0x1.8p1"
                                    }
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
