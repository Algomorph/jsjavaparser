test("ExpressionStatement", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            println("hello");
          }
        }
        */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    "location": {
                        "end": {
                            "column": 10,
                            "line": 5,
                            "offset": 123
                        },
                        "start": {
                            "column": 9,
                            "line": 1,
                            "offset": 8
                        }
                    },
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        "location": {
                            "end": {
                                "column": 20,
                                "line": 1,
                                "offset": 19
                            },
                            "start": {
                                "column": 15,
                                "line": 1,
                                "offset": 14
                            }
                        },
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            "location": {
                                "end": {
                                    "column": 9,
                                    "line": 5,
                                    "offset": 122
                                },
                                "start": {
                                    "column": 25,
                                    "line": 2,
                                    "offset": 45
                                }
                            },
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main",
                                location: {
                                    "end": {
                                        "column": 34,
                                        "line": 2,
                                        "offset": 54
                                    },
                                    "start": {
                                        "column": 30,
                                        "line": 2,
                                        "offset": 50
                                    }
                                },
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    location: {
                                        "end": {
                                            "column": 48,
                                            "line": 2,
                                            "offset": 68
                                        },
                                        "start": {
                                            "column": 44,
                                            "line": 2,
                                            "offset": 64
                                        }
                                    },
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                location: {
                                                    "end": {
                                                        "column": 41,
                                                        "line": 2,
                                                        "offset": 61
                                                    },
                                                    "start": {
                                                        "column": 35,
                                                        "line": 2,
                                                        "offset": 55
                                                    }
                                                },
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args",
                                        location: {
                                            "end": {
                                                "column": 48,
                                                "line": 2,
                                                "offset": 68
                                            },
                                            "start": {
                                                "column": 44,
                                                "line": 2,
                                                "offset": 64
                                            }
                                        },
                                    },

                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                "location": {
                                    "end": {
                                        "column": 9,
                                        "line": 5,
                                        "offset": 122
                                    },
                                    "start": {
                                        "column": 50,
                                        "line": 2,
                                        "offset": 70
                                    }
                                },
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        "location": {
                                            "end": {
                                                "column": 29,
                                                "line": 3,
                                                "offset": 100
                                            },
                                            "start": {
                                                "column": 13,
                                                "line": 3,
                                                "offset": 84
                                            }
                                        },
                                        expression: {
                                            node: "MethodInvocation",
                                            "location": {
                                                "end": {
                                                    "column": 29,
                                                    "line": 3,
                                                    "offset": 100
                                                },
                                                "start": {
                                                    "column": 13,
                                                    "line": 3,
                                                    "offset": 84
                                                }
                                            },
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                "location": {
                                                    "end": {
                                                        "column": 20,
                                                        "line": 3,
                                                        "offset": 91
                                                    },
                                                    "start": {
                                                        "column": 13,
                                                        "line": 3,
                                                        "offset": 84
                                                    }
                                                },
                                                identifier: "println"
                                            },
                                            arguments: [
                                                {
                                                    "location": {
                                                        "end": {
                                                            "column": 28,
                                                            "line": 3,
                                                            "offset": 99
                                                        },
                                                        "start": {
                                                            "column": 21,
                                                            "line": 3,
                                                            "offset": 92
                                                        }
                                                    },
                                                    node: "StringLiteral",
                                                    escapedValue: "\"hello\""
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    // test("Assignment Expression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         int min = - 2147483648;
    //         int min = (- 2147483648);
    //         int min = -2147483648L;
    //         int max = +2147483647;
    //         int max = 2147483647;
    //         int max = 2147483647L;
    //         int max2 = 9223372036854775807L;
    //         int max2 = 9223372036854775807;
    //         int max2 = + 9223372036854775807L;
    //         int max2 = 0x7fffffffffffffffL;
    //         int max2 = + 0x7fffffffffffffffL;
    //         int max2 = 0x7fffffffffffffff;
    //         int max2 = 0777777777777777777777L;
    //         int max2 = 0777777777777777777777;
    //         int max2 = +0777777777777777777777L;
    //         int max2 = 0b0111111111111111111111111111111111111111111111111111111111111111L;
    //         int max2 = 0b0111111111111111111111111111111111111111111111111111111111111111;
    //         int max2 = +0b0111111111111111111111111111111111111111111111111111111111111111L;
    //
    //         int min2 = -9223372036854775808L;
    //         int min2 = - 9223372036854775808L;
    //         int min2 = -9223372036854775808;
    //         int min2 = -9223372036854775808l;
    //         int min2 = - 9223372036854775808l;
    //         int min2 = -9223372036854775808;
    //         int min2 = 0x8000_0000_0000_0000L;
    //         int min2 = 0x8000000000000000;
    //         int min2 = 010_0000_0000_0000_0000_0000L;
    //         int min2 = 0b1000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000L;
    //
    //
    //         int max = -min;
    //
    //         i = -42;
    //         i = 42;
    //         i = !x;
    //         i = ~x;
    //         i = ++x;
    //         i = ++x;
    //         i = -++x;
    //
    //         i = 42;
    //         i += 42;
    //         i -= 42;
    //         i *= 42;
    //         i /= 42;
    //         i %= 42;
    //         i |= 42;
    //         i &= 42;
    //         i ^= 42;
    //         i <<= 42;
    //         i >>= 42;
    //         i >>>= 42;
    //         i += i *= 42;
    //         i += i *= i >>= 42*i ;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "- 2147483648"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "ParenthesizedExpression",
    //                                                 expression: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "- 2147483648"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "2147483648L"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "+",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "2147483647"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "2147483647"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "2147483647L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "9223372036854775807L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "9223372036854775807"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "+",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "9223372036854775807L"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0x7fffffffffffffffL"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "+",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "0x7fffffffffffffffL"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0x7fffffffffffffff"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0777777777777777777777L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0777777777777777777777"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "+",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "0777777777777777777777L"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0b0111111111111111111111111111111111111111111111111111111111111111L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0b0111111111111111111111111111111111111111111111111111111111111111"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "+",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "0b0111111111111111111111111111111111111111111111111111111111111111L"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "-9223372036854775808L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "- 9223372036854775808L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "9223372036854775808"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "-9223372036854775808l"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "- 9223372036854775808l"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "9223372036854775808"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0x8000_0000_0000_0000L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0x8000000000000000"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "010_0000_0000_0000_0000_0000L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "min2"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "0b1000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000L"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "max"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "min"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "-",
    //                                             operand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "!",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "x"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "~",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "x"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "++",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "x"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "++",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "x"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "-",
    //                                             operand: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "++",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "x"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "-=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "*=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "\/=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "%=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "|=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "&=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "^=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "<<=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: ">>=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: ">>>=",
    //                                         rightHandSide: {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "Assignment",
    //                                             leftHandSide: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "*=",
    //                                             rightHandSide: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "Assignment",
    //                                             leftHandSide: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "*=",
    //                                             rightHandSide: {
    //                                                 node: "Assignment",
    //                                                 leftHandSide: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">>=",
    //                                                 rightHandSide: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                     operator: "*",
    //                                                     rightOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //  );
    // });

    // test("ConditionalExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           i = i > 42 ? 42 : -42;
    //           i += i > 42 ? 42 : -42;
    //           i += i > 42 ? 42 : y ? -1 : +1;
    //           i += i > 42 ? y ? -1 : i != 42 ? --y : -42 : i++;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "ConditionalExpression",
    //                                                 expression: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                                 thenExpression: {
    //                                                     node: "PrefixExpression",
    //                                                     operator: "-",
    //                                                     operand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "1"
    //                                                     }
    //                                                 },
    //                                                 elseExpression: {
    //                                                     node: "PrefixExpression",
    //                                                     operator: "+",
    //                                                     operand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "1"
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "+=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "ConditionalExpression",
    //                                                 expression: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                                 thenExpression: {
    //                                                     node: "PrefixExpression",
    //                                                     operator: "-",
    //                                                     operand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "1"
    //                                                     }
    //                                                 },
    //                                                 elseExpression: {
    //                                                     node: "ConditionalExpression",
    //                                                     expression: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: "!=",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                     thenExpression: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "--",
    //                                                         operand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         }
    //                                                     },
    //                                                     elseExpression: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "PostfixExpression",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "++"
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("ConditionalOrExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i > 42 || y < 13;
    //           i = i > 42 || y < 13 || false;
    //           i = i > 42 ? true : i > -42 || y < 13;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                                 operator: "||",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                                 operator: "||",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: false
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "||",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("ConditionalAndExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i > 42 && y < 13;
    //           i = i > 42 && y < 13 && false;
    //           i = i > 42 || y < 13 && false;
    //           i = i > 42 ? true : i > -42 && y < 13;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             },
    //                                             operator: "&&",
    //                                             rightOperand: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: false
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "BooleanLiteral",
    //                                                     booleanValue: false
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("InclusiveOrExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i | 13;
    //           i = i | 13 | y | 42;
    //           i = i > 42 || y < 13 && i | 13 | y | 42;
    //           i = i > 42 ? true : i > -42 && i | 13 | y | 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "|",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "|",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "|",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "i"
    //                                                             },
    //                                                             operator: "|",
    //                                                             rightOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                         },
    //                                                         operator: "|",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "i"
    //                                                             },
    //                                                             operator: "|",
    //                                                             rightOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                         },
    //                                                         operator: "|",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("ExclusiveOrExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i ^ 13;
    //           i = i ^ 13 ^ y ^ 42;
    //           i = i > 42 || y < 13 && i | 13 ^ y | 42;
    //           i = i > 42 ? true : i > -42 && i | 13 | y ^ 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "^",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "^",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "^",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "^",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: "|",
    //                                                         rightOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                             operator: "^",
    //                                                             rightOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                         },
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: "|",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                         operator: "^",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("AndExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i & 13;
    //           i = i & 13 & y & 42;
    //           i = i > 42 || y < 13 && i | 13 ^ y & 42;
    //           i = i > 42 ? true : i > -42 && i & 13 | y ^ 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "&",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "&",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "&",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                         operator: "^",
    //                                                         rightOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                             operator: "&",
    //                                                             rightOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "42"
    //                                                             },
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: "&",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                         operator: "^",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("EqualityExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i == 13;
    //           i = i == 13 == y == 42;
    //           boolean j = j != 13;
    //           j = j != 13 != y != 42;
    //           i = i > 42 || y < 13 && i | 13 != y == 42;
    //           i = i > 42 ? true : i > -42 && i & 13 != y ^ 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "==",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "==",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "==",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "==",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "j"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "j"
    //                                                 },
    //                                                 operator: "!=",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "j"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "j"
    //                                                     },
    //                                                     operator: "!=",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "!=",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "!=",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                             operator: "!=",
    //                                                             rightOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                         },
    //                                                         operator: "==",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: "&",
    //                                                         rightOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                             operator: "!=",
    //                                                             rightOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                         },
    //                                                     },
    //                                                     operator: "^",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("RelationalExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           boolean i = i >= 13;
    //           i = i <= 13;
    //           i = i > 13;
    //           i = i < 13;
    //           j = j != 13 > y >= 42;
    //           i = i > 42 || y <= 13 && i | 13 > y < 42;
    //           i = i > 42 ? true : i > -42 && i >= 13 >= y ^ 42;
    //           boolean i = i instanceof java.util.List;
    //           i = i instanceof java.util.List instanceof Object;
    //           i = i instanceof List instanceof Object != 42;
    //           i = i > 42 instanceof List instanceof Object & 42;
    //           i = i instanceof List instanceof Hello<Y>.World instanceof Object | 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">=",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "<=",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: ">",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "<",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "j"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "j"
    //                                             },
    //                                             operator: "!=",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                 },
    //                                                 operator: ">=",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<=",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                             operator: ">",
    //                                                             rightOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                         },
    //                                                         operator: "<",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "BooleanLiteral",
    //                                                 booleanValue: true
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "PrefixExpression",
    //                                                         operator: "-",
    //                                                         operand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "i"
    //                                                             },
    //                                                             operator: ">=",
    //                                                             rightOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                         },
    //                                                         operator: ">=",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                     },
    //                                                     operator: "^",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "boolean"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InstanceofExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 rightOperand: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "QualifiedName",
    //                                                         qualifier: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "java"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "util"
    //                                                             }
    //                                                         },
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "List"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InstanceofExpression",
    //                                             leftOperand: {
    //                                                 node: "InstanceofExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 rightOperand: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "QualifiedName",
    //                                                         qualifier: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "java"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "util"
    //                                                             }
    //                                                         },
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "List"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             rightOperand: {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Object"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InstanceofExpression",
    //                                                 leftOperand: {
    //                                                     node: "InstanceofExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     rightOperand: {
    //                                                         node: "SimpleType",
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "List"
    //                                                         }
    //                                                     }
    //                                                 },
    //                                                 rightOperand: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Object"
    //                                                     }
    //                                                 }
    //                                             },
    //                                             operator: "!=",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InstanceofExpression",
    //                                                 leftOperand: {
    //                                                     node: "InstanceofExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         operator: ">",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                     rightOperand: {
    //                                                         node: "SimpleType",
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "List"
    //                                                         }
    //                                                     }
    //                                                 },
    //                                                 rightOperand: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Object"
    //                                                     }
    //                                                 }
    //                                             },
    //                                             operator: "&",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InstanceofExpression",
    //                                                 leftOperand: {
    //                                                     node: "InstanceofExpression",
    //                                                     leftOperand: {
    //                                                         node: "InstanceofExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                         rightOperand: {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "List"
    //                                                             }
    //                                                         }
    //                                                     },
    //                                                     rightOperand: {
    //                                                         node: "QualifiedType",
    //                                                         qualifier: {
    //                                                             node: "ParameterizedType",
    //                                                             type: {
    //                                                                 node: "SimpleType",
    //                                                                 name: {
    //                                                                     node: "SimpleName",
    //                                                                     identifier: "Hello"
    //                                                                 }
    //                                                             },
    //                                                             typeArguments: [
    //                                                                 {
    //                                                                     node: "SimpleType",
    //                                                                     name: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "Y"
    //                                                                     }
    //                                                                 }
    //                                                             ]
    //                                                         },
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "World"
    //                                                         }
    //                                                     }
    //                                                 },
    //                                                 rightOperand: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Object"
    //                                                     }
    //                                                 }
    //                                             },
    //                                             operator: "|",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("ShiftExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           int i = i >> 13;
    //           i = i << 13;
    //           i = i >>> 13;
    //           i = i >> 13 << y >>> 42;
    //           j = j >>> 13 >>> y >>> 42;
    //           i = i > 42 || y < 13 && i | 13 >>> y << 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">>",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "<<",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: ">>>",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">>",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "<<",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: ">>>",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "j"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "j"
    //                                                     },
    //                                                     operator: ">>>",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: ">>>",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: ">>>",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "&&",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "|",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "InfixExpression",
    //                                                             leftOperand: {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "13"
    //                                                             },
    //                                                             operator: ">>>",
    //                                                             rightOperand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "y"
    //                                                             },
    //                                                         },
    //                                                         operator: "<<",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("AdditiveExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           int i = i + 13;
    //           i = i - 13;
    //           i = 13 -i;
    //           i = 13+i;
    //           i = i + 13 + y >>> 42;
    //           j = j - 13 - y - 42;
    //           i = i > 42 || y < 13 + i | 13 + y - 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "+",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "-",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                             operator: "-",
    //                                             rightOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                             operator: "+",
    //                                             rightOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "+",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "+",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: ">>>",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "j"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "j"
    //                                                     },
    //                                                     operator: "-",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "-",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "-",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "||",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "<",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                         operator: "+",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "i"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                                 operator: "|",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                         operator: "+",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                     },
    //                                                     operator: "-",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("MultiplicativeExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           int i = i * 13;
    //           i = 42*i;
    //           i = i / 13;
    //           i = 42/i;
    //           i = i % 13;
    //           i = 42%i;
    //           i = i % 13 % y % 42;
    //           j = j % 13 / y * 42 + -1;
    //           i = i > 42 % y < 13 * i | 13 + y / 42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "*",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             operator: "*",
    //                                             rightOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "/",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             operator: "/",
    //                                             rightOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "%",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "13"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             operator: "%",
    //                                             rightOperand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: "%",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                 },
    //                                                 operator: "%",
    //                                                 rightOperand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "y"
    //                                                 },
    //                                             },
    //                                             operator: "%",
    //                                             rightOperand: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "j"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "j"
    //                                                         },
    //                                                         operator: "%",
    //                                                         rightOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "13"
    //                                                         },
    //                                                     },
    //                                                     operator: "/",
    //                                                     rightOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                 },
    //                                                 operator: "*",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                             },
    //                                             operator: "+",
    //                                             rightOperand: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "1"
    //                                                 }
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                     operator: ">",
    //                                                     rightOperand: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         },
    //                                                         operator: "%",
    //                                                         rightOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "y"
    //                                                         },
    //                                                     },
    //                                                 },
    //                                                 operator: "<",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "13"
    //                                                     },
    //                                                     operator: "*",
    //                                                     rightOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "i"
    //                                                     },
    //                                                 },
    //                                             },
    //                                             operator: "|",
    //                                             rightOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "13"
    //                                                 },
    //                                                 operator: "+",
    //                                                 rightOperand: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "y"
    //                                                     },
    //                                                     operator: "/",
    //                                                     rightOperand: {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     },
    //                                                 },
    //                                             },
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Prefix UnaryExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           --i;
    //           i = --i - --a;
    //           hello.world.i -= --hello.world.i;
    //           ++a;
    //           a = +a;
    //           b = -b;
    //           c = ~c;
    //           d = !d;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "PrefixExpression",
    //                                         operator: "--",
    //                                         operand: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "--",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 }
    //                                             },
    //                                             operator: "-",
    //                                             rightOperand: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "--",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "a"
    //                                                 }
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "QualifiedName",
    //                                             qualifier: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "world"
    //                                                 }
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             }
    //                                         },
    //                                         operator: "-=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "--",
    //                                             operand: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "QualifiedName",
    //                                                     qualifier: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "hello"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "world"
    //                                                     }
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "PrefixExpression",
    //                                         operator: "++",
    //                                         operand: {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "+",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "-",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "b"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "~",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "c"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "d"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PrefixExpression",
    //                                             operator: "!",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "d"
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Cast UnaryExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //           i = (int)d;
    //           i = (int)hello.d++;
    //           i = ((double)hello.d) > 3.14 ? 42 : -42;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "CastExpression",
    //                                             type: {
    //                                                 node: "PrimitiveType",
    //                                                 primitiveTypeCode: "int"
    //                                             },
    //                                             expression: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "d"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "CastExpression",
    //                                             type: {
    //                                                 node: "PrimitiveType",
    //                                                 primitiveTypeCode: "int"
    //                                             },
    //                                             expression: {
    //                                                 node: "PostfixExpression",
    //                                                 operand: {
    //                                                     node: "QualifiedName",
    //                                                     qualifier: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "hello"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "d"
    //                                                     }
    //                                                 },
    //                                                 operator: "++"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ConditionalExpression",
    //                                             expression: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "ParenthesizedExpression",
    //                                                     expression: {
    //                                                         node: "CastExpression",
    //                                                         type: {
    //                                                             node: "PrimitiveType",
    //                                                             primitiveTypeCode: "double"
    //                                                         },
    //                                                         expression: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "hello"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "d"
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 },
    //                                                 operator: ">",
    //                                                 rightOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "3.14"
    //                                                 },
    //                                             },
    //                                             thenExpression: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             },
    //                                             elseExpression: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "-",
    //                                                 operand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });

    test("Primary UnaryExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            new Object(); // Primary
            new java.lang.String("hello").hashCode("hello"); // Primary Selector
            new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().equals(42); // Primary Selector+
            new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().some(42).equals(42); // Primary Selector+
            Hello.World++; // Primary PostfixOp
            Hello().World++; // Primary Selector PostfixOp
            new java.lang.String("hello").hashCode("hello").v++; // Primary Selector+ PostfixOp
            new java.lang.String("hello").hashCode("hello").h.v++; // Primary Selector+ PostfixOp
            new String("hello").hashCode("hello").h.v().hello.world++;
            ++new String("hello").hashCode("hello").h.v().hello.world;
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
          {
              node: "CompilationUnit",
              package: null,
              imports: [],
              types: [
                  {
                      node: "TypeDeclaration",
                      location: {
                          start: {
                              column: 0,
                              line: 1,
                              offset: 0
                          },
                          end: {
                              column: -1,
                              line: -1,
                              offset: 804
                          }
                      },
                      javadoc: null,
                      modifiers: [],
                      interface: false,
                      name: {
                          node: "SimpleName",
                          location: {
                              start: {
                                  column: 6,
                                  line: 1,
                                  offset: 6
                              },
                              end: {
                                  column: 5,
                                  line: 1,
                                  offset: 5
                              }
                          },
                          identifier: "Test",
                          var: false
                      },
                      typeParameters: [],
                      superclassType: null,
                      superInterfaceTypes: [],
                      bodyDeclarations: [
                          {
                              node: "MethodDeclaration",
                              location: {
                                  start: {
                                      column: 4,
                                      line: 2,
                                      offset: 17
                                  },
                                  end: {
                                      column: 57,
                                      line: 12,
                                      offset: 786
                                  }
                              },
                              javadoc: null,
                              modifiers: [
                                  {
                                      node: "Modifier",
                                      location: {
                                          start: {
                                              column: 4,
                                              line: 2,
                                              offset: 17
                                          },
                                          end: {
                                              column: 8,
                                              line: 1,
                                              offset: 8
                                          }
                                      },
                                      keyword: "public"
                                  },
                                  {
                                      node: "Modifier",
                                      location: {
                                          start: {
                                              column: 11,
                                              line: 2,
                                              offset: 24
                                          },
                                          end: {
                                              column: 8,
                                              line: 1,
                                              offset: 8
                                          }
                                      },
                                      keyword: "static"
                                  }
                              ],
                              constructor: false,
                              typeParameters: [],
                              returnType2: {
                                  node: "PrimitiveType",
                                  location: {
                                      start: {
                                          column: 18,
                                          line: 2,
                                          offset: 31
                                      },
                                      end: {
                                          column: 6,
                                          line: 1,
                                          offset: 6
                                      }
                                  },
                                  annotations: [],
                                  primitiveTypeCode: "void"
                              },
                              name: {
                                  node: "SimpleName",
                                  location: {
                                      start: {
                                          column: 23,
                                          line: 2,
                                          offset: 36
                                      },
                                      end: {
                                          column: 6,
                                          line: 1,
                                          offset: 6
                                      }
                                  },
                                  identifier: "main",
                                  var: false
                              },
                              receiverType: null,
                              receiverQualifier: null,
                              parameters: [
                                  {
                                      node: "SingleVariableDeclaration",
                                      location: {
                                          start: {
                                              column: 28,
                                              line: 2,
                                              offset: 41
                                          },
                                          end: {
                                              column: 2,
                                              line: 2,
                                              offset: 15
                                          }
                                      },
                                      modifiers: [],
                                      type: {
                                          node: "ArrayType",
                                          location: {
                                              start: {
                                                  column: 28,
                                                  line: 2,
                                                  offset: 41
                                              },
                                              end: {
                                                  column: 10,
                                                  line: 1,
                                                  offset: 10
                                              }
                                          },
                                          elementType: {
                                              node: "SimpleType",
                                              location: {
                                                  start: {
                                                      column: 28,
                                                      line: 2,
                                                      offset: 41
                                                  },
                                                  end: {
                                                      column: 8,
                                                      line: 1,
                                                      offset: 8
                                                  }
                                              },
                                              annotations: [],
                                              name: {
                                                  node: "SimpleName",
                                                  location: {
                                                      start: {
                                                          column: 28,
                                                          line: 2,
                                                          offset: 41
                                                      },
                                                      end: {
                                                          column: 8,
                                                          line: 1,
                                                          offset: 8
                                                      }
                                                  },
                                                  identifier: "String",
                                                  var: false
                                              }
                                          },
                                          dimensions: [
                                              {
                                                  node: "Dimension",
                                                  location: {
                                                      start: {
                                                          column: 34,
                                                          line: 2,
                                                          offset: 47
                                                      },
                                                      end: {
                                                          column: 4,
                                                          line: 1,
                                                          offset: 4
                                                      }
                                                  },
                                                  annotations: []
                                              }
                                          ]
                                      },
                                      varargsAnnotations: [],
                                      varargs: false,
                                      name: {
                                          node: "SimpleName",
                                          location: {
                                              start: {
                                                  column: 37,
                                                  line: 2,
                                                  offset: 50
                                              },
                                              end: {
                                                  column: 6,
                                                  line: 1,
                                                  offset: 6
                                              }
                                          },
                                          identifier: "args",
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
                                  location: {
                                      start: {
                                          column: 43,
                                          line: 2,
                                          offset: 56
                                      },
                                      end: {
                                          column: 18,
                                          line: 12,
                                          offset: 747
                                      }
                                  },
                                  statements: [
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 3,
                                                  offset: 66
                                              },
                                              end: {
                                                  column: 3,
                                                  line: 2,
                                                  offset: 16
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary"
                                              }
                                          ],
                                          expression: {
                                              node: "ClassInstanceCreation",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 3,
                                                      offset: 66
                                                  },
                                                  end: {
                                                      column: 2,
                                                      line: 2,
                                                      offset: 15
                                                  }
                                              },
                                              expression: null,
                                              typeArguments: [],
                                              type: {
                                                  node: "SimpleType",
                                                  location: {
                                                      start: {
                                                          column: 12,
                                                          line: 3,
                                                          offset: 70
                                                      },
                                                      end: {
                                                          column: 9,
                                                          line: 1,
                                                          offset: 9
                                                      }
                                                  },
                                                  annotations: [],
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 12,
                                                              line: 3,
                                                              offset: 70
                                                          },
                                                          end: {
                                                              column: 9,
                                                              line: 1,
                                                              offset: 9
                                                          }
                                                      },
                                                      identifier: "Object",
                                                      var: false
                                                  }
                                              },
                                              arguments: [],
                                              anonymousClassDeclaration: null
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 4,
                                                  offset: 99
                                              },
                                              end: {
                                                  column: 39,
                                                  line: 2,
                                                  offset: 52
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector"
                                              }
                                          ],
                                          expression: {
                                              node: "MethodInvocation",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 4,
                                                      offset: 99
                                                  },
                                                  end: {
                                                      column: 38,
                                                      line: 2,
                                                      offset: 51
                                                  }
                                              },
                                              expression: {
                                                  node: "ClassInstanceCreation",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 4,
                                                          offset: 99
                                                      },
                                                      end: {
                                                          column: 20,
                                                          line: 2,
                                                          offset: 33
                                                      }
                                                  },
                                                  expression: null,
                                                  typeArguments: [],
                                                  type: {
                                                      node: "SimpleType",
                                                      location: {
                                                          start: {
                                                              column: 12,
                                                              line: 4,
                                                              offset: 103
                                                          },
                                                          end: {
                                                              column: 7,
                                                              line: 2,
                                                              offset: 20
                                                          }
                                                      },
                                                      annotations: [],
                                                      name: {
                                                          node: "QualifiedName",
                                                          location: {
                                                              start: {
                                                                  column: 12,
                                                                  line: 4,
                                                                  offset: 103
                                                              },
                                                              end: {
                                                                  column: 7,
                                                                  line: 2,
                                                                  offset: 20
                                                              }
                                                          },
                                                          qualifier: {
                                                              node: "QualifiedName",
                                                              location: {
                                                                  start: {
                                                                      column: 12,
                                                                      line: 4,
                                                                      offset: 103
                                                                  },
                                                                  end: {
                                                                      column: 0,
                                                                      line: 2,
                                                                      offset: 13
                                                                  }
                                                              },
                                                              qualifier: {
                                                                  node: "SimpleName",
                                                                  location: {
                                                                      start: {
                                                                          column: 12,
                                                                          line: 4,
                                                                          offset: 103
                                                                      },
                                                                      end: {
                                                                          column: 8,
                                                                          line: 1,
                                                                          offset: 8
                                                                      }
                                                                  },
                                                                  identifier: "java",
                                                                  var: false
                                                              },
                                                              name: {
                                                                  node: "SimpleName",
                                                                  location: {
                                                                      start: {
                                                                          column: 17,
                                                                          line: 4,
                                                                          offset: 108
                                                                      },
                                                                      end: {
                                                                          column: 8,
                                                                          line: 1,
                                                                          offset: 8
                                                                      }
                                                                  },
                                                                  identifier: "lang",
                                                                  var: false
                                                              }
                                                          },
                                                          name: {
                                                              node: "SimpleName",
                                                              location: {
                                                                  start: {
                                                                      column: 22,
                                                                      line: 4,
                                                                      offset: 113
                                                                  },
                                                                  end: {
                                                                      column: 10,
                                                                      line: 1,
                                                                      offset: 10
                                                                  }
                                                              },
                                                              identifier: "String",
                                                              var: false
                                                          }
                                                      }
                                                  },
                                                  arguments: [
                                                      {
                                                          node: "StringLiteral",
                                                          location: {
                                                              start: {
                                                                  column: 29,
                                                                  line: 4,
                                                                  offset: 120
                                                              },
                                                              end: {
                                                                  column: 11,
                                                                  line: 1,
                                                                  offset: 11
                                                              }
                                                          },
                                                          escapedValue: "\"hello\""
                                                      }
                                                  ],
                                                  anonymousClassDeclaration: null
                                              },
                                              typeArguments: [],
                                              name: {
                                                  node: "SimpleName",
                                                  location: {
                                                      start: {
                                                          column: 38,
                                                          line: 4,
                                                          offset: 129
                                                      },
                                                      end: {
                                                          column: 12,
                                                          line: 1,
                                                          offset: 12
                                                      }
                                                  },
                                                  identifier: "hashCode",
                                                  var: false
                                              },
                                              arguments: [
                                                  {
                                                      node: "StringLiteral",
                                                      location: {
                                                          start: {
                                                              column: 47,
                                                              line: 4,
                                                              offset: 138
                                                          },
                                                          end: {
                                                              column: 11,
                                                              line: 1,
                                                              offset: 11
                                                          }
                                                      },
                                                      escapedValue: "\"hello\""
                                                  }
                                              ]
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 5,
                                                  offset: 176
                                              },
                                              end: {
                                                  column: 17,
                                                  line: 3,
                                                  offset: 75
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector+"
                                              }
                                          ],
                                          expression: {
                                              node: "MethodInvocation",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 5,
                                                      offset: 176
                                                  },
                                                  end: {
                                                      column: 16,
                                                      line: 3,
                                                      offset: 74
                                                  }
                                              },
                                              expression: {
                                                  node: "MethodInvocation",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 5,
                                                          offset: 176
                                                      },
                                                      end: {
                                                          column: 5,
                                                          line: 3,
                                                          offset: 63
                                                      }
                                                  },
                                                  expression: {
                                                      node: "ClassInstanceCreation",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 5,
                                                              offset: 176
                                                          },
                                                          end: {
                                                              column: 39,
                                                              line: 2,
                                                              offset: 52
                                                          }
                                                      },
                                                      expression: null,
                                                      typeArguments: [],
                                                      type: {
                                                          node: "SimpleType",
                                                          location: {
                                                              start: {
                                                                  column: 12,
                                                                  line: 5,
                                                                  offset: 180
                                                              },
                                                              end: {
                                                                  column: 11,
                                                                  line: 1,
                                                                  offset: 11
                                                              }
                                                          },
                                                          annotations: [],
                                                          name: {
                                                              node: "SimpleName",
                                                              location: {
                                                                  start: {
                                                                      column: 12,
                                                                      line: 5,
                                                                      offset: 180
                                                                  },
                                                                  end: {
                                                                      column: 11,
                                                                      line: 1,
                                                                      offset: 11
                                                                  }
                                                              },
                                                              identifier: "String",
                                                              var: false
                                                          }
                                                      },
                                                      arguments: [
                                                          {
                                                              node: "ArrayCreation",
                                                              location: {
                                                                  start: {
                                                                      column: 19,
                                                                      line: 5,
                                                                      offset: 187
                                                                  },
                                                                  end: {
                                                                      column: 27,
                                                                      line: 2,
                                                                      offset: 40
                                                                  }
                                                              },
                                                              type: {
                                                                  node: "ArrayType",
                                                                  location: {
                                                                      start: {
                                                                          column: 23,
                                                                          line: 5,
                                                                          offset: 191
                                                                      },
                                                                      end: {
                                                                          column: 11,
                                                                          line: 1,
                                                                          offset: 11
                                                                      }
                                                                  },
                                                                  elementType: {
                                                                      node: "PrimitiveType",
                                                                      location: {
                                                                          start: {
                                                                              column: 23,
                                                                              line: 5,
                                                                              offset: 191
                                                                          },
                                                                          end: {
                                                                              column: 9,
                                                                              line: 1,
                                                                              offset: 9
                                                                          }
                                                                      },
                                                                      annotations: [],
                                                                      primitiveTypeCode: "char"
                                                                  },
                                                                  dimensions: [
                                                                      {
                                                                          node: "Dimension",
                                                                          location: {
                                                                              start: {
                                                                                  column: 27,
                                                                                  line: 5,
                                                                                  offset: 195
                                                                              },
                                                                              end: {
                                                                                  column: 7,
                                                                                  line: 1,
                                                                                  offset: 7
                                                                              }
                                                                          },
                                                                          annotations: []
                                                                      }
                                                                  ]
                                                              },
                                                              dimensions: [],
                                                              initializer: {
                                                                  node: "ArrayInitializer",
                                                                  location: {
                                                                      start: {
                                                                          column: 29,
                                                                          line: 5,
                                                                          offset: 197
                                                                      },
                                                                      end: {
                                                                          column: 17,
                                                                          line: 2,
                                                                          offset: 30
                                                                      }
                                                                  },
                                                                  expressions: [
                                                                      {
                                                                          node: "CharacterLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 30,
                                                                                  line: 5,
                                                                                  offset: 198
                                                                              },
                                                                              end: {
                                                                                  column: 8,
                                                                                  line: 1,
                                                                                  offset: 8
                                                                              }
                                                                          },
                                                                          escapedValue: "'h'"
                                                                      },
                                                                      {
                                                                          node: "CharacterLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 35,
                                                                                  line: 5,
                                                                                  offset: 203
                                                                              },
                                                                              end: {
                                                                                  column: 8,
                                                                                  line: 1,
                                                                                  offset: 8
                                                                              }
                                                                          },
                                                                          escapedValue: "'e'"
                                                                      },
                                                                      {
                                                                          node: "CharacterLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 40,
                                                                                  line: 5,
                                                                                  offset: 208
                                                                              },
                                                                              end: {
                                                                                  column: 8,
                                                                                  line: 1,
                                                                                  offset: 8
                                                                              }
                                                                          },
                                                                          escapedValue: "'l'"
                                                                      },
                                                                      {
                                                                          node: "CharacterLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 45,
                                                                                  line: 5,
                                                                                  offset: 213
                                                                              },
                                                                              end: {
                                                                                  column: 8,
                                                                                  line: 1,
                                                                                  offset: 8
                                                                              }
                                                                          },
                                                                          escapedValue: "'l'"
                                                                      },
                                                                      {
                                                                          node: "CharacterLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 50,
                                                                                  line: 5,
                                                                                  offset: 218
                                                                              },
                                                                              end: {
                                                                                  column: 8,
                                                                                  line: 1,
                                                                                  offset: 8
                                                                              }
                                                                          },
                                                                          escapedValue: "'o'"
                                                                      }
                                                                  ]
                                                              }
                                                          }
                                                      ],
                                                      anonymousClassDeclaration: null
                                                  },
                                                  typeArguments: [],
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 56,
                                                              line: 5,
                                                              offset: 224
                                                          },
                                                          end: {
                                                              column: 0,
                                                              line: 2,
                                                              offset: 13
                                                          }
                                                      },
                                                      identifier: "hashCode",
                                                      var: false
                                                  },
                                                  arguments: []
                                              },
                                              typeArguments: [],
                                              name: {
                                                  node: "SimpleName",
                                                  location: {
                                                      start: {
                                                          column: 67,
                                                          line: 5,
                                                          offset: 235
                                                      },
                                                      end: {
                                                          column: 11,
                                                          line: 1,
                                                          offset: 11
                                                      }
                                                  },
                                                  identifier: "equals",
                                                  var: false
                                              },
                                              arguments: [
                                                  {
                                                      node: "NumberLiteral",
                                                      location: {
                                                          start: {
                                                              column: 74,
                                                              line: 5,
                                                              offset: 242
                                                          },
                                                          end: {
                                                              column: 7,
                                                              line: 1,
                                                              offset: 7
                                                          }
                                                      },
                                                      token: "42"
                                                  }
                                              ]
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 6,
                                                  offset: 276
                                              },
                                              end: {
                                                  column: 27,
                                                  line: 3,
                                                  offset: 85
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector+"
                                              }
                                          ],
                                          expression: {
                                              node: "MethodInvocation",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 6,
                                                      offset: 276
                                                  },
                                                  end: {
                                                      column: 26,
                                                      line: 3,
                                                      offset: 84
                                                  }
                                              },
                                              expression: {
                                                  node: "MethodInvocation",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 6,
                                                          offset: 276
                                                      },
                                                      end: {
                                                          column: 15,
                                                          line: 3,
                                                          offset: 73
                                                      }
                                                  },
                                                  expression: {
                                                      node: "MethodInvocation",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 6,
                                                              offset: 276
                                                          },
                                                          end: {
                                                              column: 6,
                                                              line: 3,
                                                              offset: 64
                                                          }
                                                      },
                                                      expression: {
                                                          node: "ClassInstanceCreation",
                                                          location: {
                                                              start: {
                                                                  column: 8,
                                                                  line: 6,
                                                                  offset: 276
                                                              },
                                                              end: {
                                                                  column: 40,
                                                                  line: 2,
                                                                  offset: 53
                                                              }
                                                          },
                                                          expression: null,
                                                          typeArguments: [],
                                                          type: {
                                                              node: "SimpleType",
                                                              location: {
                                                                  start: {
                                                                      column: 12,
                                                                      line: 6,
                                                                      offset: 280
                                                                  },
                                                                  end: {
                                                                      column: 12,
                                                                      line: 1,
                                                                      offset: 12
                                                                  }
                                                              },
                                                              annotations: [],
                                                              name: {
                                                                  node: "SimpleName",
                                                                  location: {
                                                                      start: {
                                                                          column: 12,
                                                                          line: 6,
                                                                          offset: 280
                                                                      },
                                                                      end: {
                                                                          column: 12,
                                                                          line: 1,
                                                                          offset: 12
                                                                      }
                                                                  },
                                                                  identifier: "String",
                                                                  var: false
                                                              }
                                                          },
                                                          arguments: [
                                                              {
                                                                  node: "ArrayCreation",
                                                                  location: {
                                                                      start: {
                                                                          column: 19,
                                                                          line: 6,
                                                                          offset: 287
                                                                      },
                                                                      end: {
                                                                          column: 28,
                                                                          line: 2,
                                                                          offset: 41
                                                                      }
                                                                  },
                                                                  type: {
                                                                      node: "ArrayType",
                                                                      location: {
                                                                          start: {
                                                                              column: 23,
                                                                              line: 6,
                                                                              offset: 291
                                                                          },
                                                                          end: {
                                                                              column: 12,
                                                                              line: 1,
                                                                              offset: 12
                                                                          }
                                                                      },
                                                                      elementType: {
                                                                          node: "PrimitiveType",
                                                                          location: {
                                                                              start: {
                                                                                  column: 23,
                                                                                  line: 6,
                                                                                  offset: 291
                                                                              },
                                                                              end: {
                                                                                  column: 10,
                                                                                  line: 1,
                                                                                  offset: 10
                                                                              }
                                                                          },
                                                                          annotations: [],
                                                                          primitiveTypeCode: "char"
                                                                      },
                                                                      dimensions: [
                                                                          {
                                                                              node: "Dimension",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 27,
                                                                                      line: 6,
                                                                                      offset: 295
                                                                                  },
                                                                                  end: {
                                                                                      column: 8,
                                                                                      line: 1,
                                                                                      offset: 8
                                                                                  }
                                                                              },
                                                                              annotations: []
                                                                          }
                                                                      ]
                                                                  },
                                                                  dimensions: [],
                                                                  initializer: {
                                                                      node: "ArrayInitializer",
                                                                      location: {
                                                                          start: {
                                                                              column: 29,
                                                                              line: 6,
                                                                              offset: 297
                                                                          },
                                                                          end: {
                                                                              column: 18,
                                                                              line: 2,
                                                                              offset: 31
                                                                          }
                                                                      },
                                                                      expressions: [
                                                                          {
                                                                              node: "CharacterLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 30,
                                                                                      line: 6,
                                                                                      offset: 298
                                                                                  },
                                                                                  end: {
                                                                                      column: 9,
                                                                                      line: 1,
                                                                                      offset: 9
                                                                                  }
                                                                              },
                                                                              escapedValue: "'h'"
                                                                          },
                                                                          {
                                                                              node: "CharacterLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 35,
                                                                                      line: 6,
                                                                                      offset: 303
                                                                                  },
                                                                                  end: {
                                                                                      column: 9,
                                                                                      line: 1,
                                                                                      offset: 9
                                                                                  }
                                                                              },
                                                                              escapedValue: "'e'"
                                                                          },
                                                                          {
                                                                              node: "CharacterLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 40,
                                                                                      line: 6,
                                                                                      offset: 308
                                                                                  },
                                                                                  end: {
                                                                                      column: 9,
                                                                                      line: 1,
                                                                                      offset: 9
                                                                                  }
                                                                              },
                                                                              escapedValue: "'l'"
                                                                          },
                                                                          {
                                                                              node: "CharacterLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 45,
                                                                                      line: 6,
                                                                                      offset: 313
                                                                                  },
                                                                                  end: {
                                                                                      column: 9,
                                                                                      line: 1,
                                                                                      offset: 9
                                                                                  }
                                                                              },
                                                                              escapedValue: "'l'"
                                                                          },
                                                                          {
                                                                              node: "CharacterLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 50,
                                                                                      line: 6,
                                                                                      offset: 318
                                                                                  },
                                                                                  end: {
                                                                                      column: 9,
                                                                                      line: 1,
                                                                                      offset: 9
                                                                                  }
                                                                              },
                                                                              escapedValue: "'o'"
                                                                          }
                                                                      ]
                                                                  }
                                                              }
                                                          ],
                                                          anonymousClassDeclaration: null
                                                      },
                                                      typeArguments: [],
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 56,
                                                                  line: 6,
                                                                  offset: 324
                                                              },
                                                              end: {
                                                                  column: 1,
                                                                  line: 2,
                                                                  offset: 14
                                                              }
                                                          },
                                                          identifier: "hashCode",
                                                          var: false
                                                      },
                                                      arguments: []
                                                  },
                                                  typeArguments: [],
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 67,
                                                              line: 6,
                                                              offset: 335
                                                          },
                                                          end: {
                                                              column: 10,
                                                              line: 1,
                                                              offset: 10
                                                          }
                                                      },
                                                      identifier: "some",
                                                      var: false
                                                  },
                                                  arguments: [
                                                      {
                                                          node: "NumberLiteral",
                                                          location: {
                                                              start: {
                                                                  column: 72,
                                                                  line: 6,
                                                                  offset: 340
                                                              },
                                                              end: {
                                                                  column: 8,
                                                                  line: 1,
                                                                  offset: 8
                                                              }
                                                          },
                                                          token: "42"
                                                      }
                                                  ]
                                              },
                                              typeArguments: [],
                                              name: {
                                                  node: "SimpleName",
                                                  location: {
                                                      start: {
                                                          column: 76,
                                                          line: 6,
                                                          offset: 344
                                                      },
                                                      end: {
                                                          column: 12,
                                                          line: 1,
                                                          offset: 12
                                                      }
                                                  },
                                                  identifier: "equals",
                                                  var: false
                                              },
                                              arguments: [
                                                  {
                                                      node: "NumberLiteral",
                                                      location: {
                                                          start: {
                                                              column: 83,
                                                              line: 6,
                                                              offset: 351
                                                          },
                                                          end: {
                                                              column: 8,
                                                              line: 1,
                                                              offset: 8
                                                          }
                                                      },
                                                      token: "42"
                                                  }
                                              ]
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 7,
                                                  offset: 385
                                              },
                                              end: {
                                                  column: 8,
                                                  line: 2,
                                                  offset: 21
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary PostfixOp"
                                              }
                                          ],
                                          expression: {
                                              node: "PostfixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 7,
                                                      offset: 385
                                                  },
                                                  end: {
                                                      column: 7,
                                                      line: 2,
                                                      offset: 20
                                                  }
                                              },
                                              operand: {
                                                  node: "QualifiedName",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 7,
                                                          offset: 385
                                                      },
                                                      end: {
                                                          column: 5,
                                                          line: 2,
                                                          offset: 18
                                                      }
                                                  },
                                                  qualifier: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 7,
                                                              offset: 385
                                                          },
                                                          end: {
                                                              column: 12,
                                                              line: 1,
                                                              offset: 12
                                                          }
                                                      },
                                                      identifier: "Hello",
                                                      var: false
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 14,
                                                              line: 7,
                                                              offset: 391
                                                          },
                                                          end: {
                                                              column: 12,
                                                              line: 1,
                                                              offset: 12
                                                          }
                                                      },
                                                      identifier: "World",
                                                      var: false
                                                  }
                                              },
                                              operator: "++"
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 8,
                                                  offset: 429
                                              },
                                              end: {
                                                  column: 11,
                                                  line: 2,
                                                  offset: 24
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector PostfixOp"
                                              }
                                          ],
                                          expression: {
                                              node: "PostfixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 8,
                                                      offset: 429
                                                  },
                                                  end: {
                                                      column: 10,
                                                      line: 2,
                                                      offset: 23
                                                  }
                                              },
                                              operand: {
                                                  node: "FieldAccess",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 8,
                                                          offset: 429
                                                      },
                                                      end: {
                                                          column: 8,
                                                          line: 2,
                                                          offset: 21
                                                      }
                                                  },
                                                  expression: {
                                                      node: "MethodInvocation",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 8,
                                                              offset: 429
                                                          },
                                                          end: {
                                                              column: 2,
                                                              line: 2,
                                                              offset: 15
                                                          }
                                                      },
                                                      expression: null,
                                                      typeArguments: [],
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 8,
                                                                  line: 8,
                                                                  offset: 429
                                                              },
                                                              end: {
                                                                  column: 0,
                                                                  line: 2,
                                                                  offset: 13
                                                              }
                                                          },
                                                          identifier: "Hello",
                                                          var: false
                                                      },
                                                      arguments: []
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 16,
                                                              line: 8,
                                                              offset: 437
                                                          },
                                                          end: {
                                                              column: 0,
                                                              line: 2,
                                                              offset: 13
                                                          }
                                                      },
                                                      identifier: "World",
                                                      var: false
                                                  }
                                              },
                                              operator: "++"
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 9,
                                                  offset: 484
                                              },
                                              end: {
                                                  column: 3,
                                                  line: 3,
                                                  offset: 61
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector+ PostfixOp"
                                              }
                                          ],
                                          expression: {
                                              node: "PostfixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 9,
                                                      offset: 484
                                                  },
                                                  end: {
                                                      column: 2,
                                                      line: 3,
                                                      offset: 60
                                                  }
                                              },
                                              operand: {
                                                  node: "FieldAccess",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 9,
                                                          offset: 484
                                                      },
                                                      end: {
                                                          column: 0,
                                                          line: 3,
                                                          offset: 58
                                                      }
                                                  },
                                                  expression: {
                                                      node: "MethodInvocation",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 9,
                                                              offset: 484
                                                          },
                                                          end: {
                                                              column: 43,
                                                              line: 2,
                                                              offset: 56
                                                          }
                                                      },
                                                      expression: {
                                                          node: "ClassInstanceCreation",
                                                          location: {
                                                              start: {
                                                                  column: 8,
                                                                  line: 9,
                                                                  offset: 484
                                                              },
                                                              end: {
                                                                  column: 25,
                                                                  line: 2,
                                                                  offset: 38
                                                              }
                                                          },
                                                          expression: null,
                                                          typeArguments: [],
                                                          type: {
                                                              node: "SimpleType",
                                                              location: {
                                                                  start: {
                                                                      column: 12,
                                                                      line: 9,
                                                                      offset: 488
                                                                  },
                                                                  end: {
                                                                      column: 12,
                                                                      line: 2,
                                                                      offset: 25
                                                                  }
                                                              },
                                                              annotations: [],
                                                              name: {
                                                                  node: "QualifiedName",
                                                                  location: {
                                                                      start: {
                                                                          column: 12,
                                                                          line: 9,
                                                                          offset: 488
                                                                      },
                                                                      end: {
                                                                          column: 12,
                                                                          line: 2,
                                                                          offset: 25
                                                                      }
                                                                  },
                                                                  qualifier: {
                                                                      node: "QualifiedName",
                                                                      location: {
                                                                          start: {
                                                                              column: 12,
                                                                              line: 9,
                                                                              offset: 488
                                                                          },
                                                                          end: {
                                                                              column: 5,
                                                                              line: 2,
                                                                              offset: 18
                                                                          }
                                                                      },
                                                                      qualifier: {
                                                                          node: "SimpleName",
                                                                          location: {
                                                                              start: {
                                                                                  column: 12,
                                                                                  line: 9,
                                                                                  offset: 488
                                                                              },
                                                                              end: {
                                                                                  column: 0,
                                                                                  line: 2,
                                                                                  offset: 13
                                                                              }
                                                                          },
                                                                          identifier: "java",
                                                                          var: false
                                                                      },
                                                                      name: {
                                                                          node: "SimpleName",
                                                                          location: {
                                                                              start: {
                                                                                  column: 17,
                                                                                  line: 9,
                                                                                  offset: 493
                                                                              },
                                                                              end: {
                                                                                  column: 0,
                                                                                  line: 2,
                                                                                  offset: 13
                                                                              }
                                                                          },
                                                                          identifier: "lang",
                                                                          var: false
                                                                      }
                                                                  },
                                                                  name: {
                                                                      node: "SimpleName",
                                                                      location: {
                                                                          start: {
                                                                              column: 22,
                                                                              line: 9,
                                                                              offset: 498
                                                                          },
                                                                          end: {
                                                                              column: 2,
                                                                              line: 2,
                                                                              offset: 15
                                                                          }
                                                                      },
                                                                      identifier: "String",
                                                                      var: false
                                                                  }
                                                              }
                                                          },
                                                          arguments: [
                                                              {
                                                                  node: "StringLiteral",
                                                                  location: {
                                                                      start: {
                                                                          column: 29,
                                                                          line: 9,
                                                                          offset: 505
                                                                      },
                                                                      end: {
                                                                          column: 3,
                                                                          line: 2,
                                                                          offset: 16
                                                                      }
                                                                  },
                                                                  escapedValue: "\"hello\""
                                                              }
                                                          ],
                                                          anonymousClassDeclaration: null
                                                      },
                                                      typeArguments: [],
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 38,
                                                                  line: 9,
                                                                  offset: 514
                                                              },
                                                              end: {
                                                                  column: 4,
                                                                  line: 2,
                                                                  offset: 17
                                                              }
                                                          },
                                                          identifier: "hashCode",
                                                          var: false
                                                      },
                                                      arguments: [
                                                          {
                                                              node: "StringLiteral",
                                                              location: {
                                                                  start: {
                                                                      column: 47,
                                                                      line: 9,
                                                                      offset: 523
                                                                  },
                                                                  end: {
                                                                      column: 3,
                                                                      line: 2,
                                                                      offset: 16
                                                                  }
                                                              },
                                                              escapedValue: "\"hello\""
                                                          }
                                                      ]
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 56,
                                                              line: 9,
                                                              offset: 532
                                                          },
                                                          end: {
                                                              column: 10,
                                                              line: 1,
                                                              offset: 10
                                                          }
                                                      },
                                                      identifier: "v",
                                                      var: false
                                                  }
                                              },
                                              operator: "++"
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 10,
                                                  offset: 576
                                              },
                                              end: {
                                                  column: 6,
                                                  line: 3,
                                                  offset: 64
                                              }
                                          },
                                          trailingComments: [
                                              {
                                                  node: "LineComment",
                                                  value: "\/\/ Primary Selector+ PostfixOp"
                                              }
                                          ],
                                          expression: {
                                              node: "PostfixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 10,
                                                      offset: 576
                                                  },
                                                  end: {
                                                      column: 5,
                                                      line: 3,
                                                      offset: 63
                                                  }
                                              },
                                              operand: {
                                                  node: "FieldAccess",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 10,
                                                          offset: 576
                                                      },
                                                      end: {
                                                          column: 3,
                                                          line: 3,
                                                          offset: 61
                                                      }
                                                  },
                                                  expression: {
                                                      node: "FieldAccess",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 10,
                                                              offset: 576
                                                          },
                                                          end: {
                                                              column: 1,
                                                              line: 3,
                                                              offset: 59
                                                          }
                                                      },
                                                      expression: {
                                                          node: "MethodInvocation",
                                                          location: {
                                                              start: {
                                                                  column: 8,
                                                                  line: 10,
                                                                  offset: 576
                                                              },
                                                              end: {
                                                                  column: 44,
                                                                  line: 2,
                                                                  offset: 57
                                                              }
                                                          },
                                                          expression: {
                                                              node: "ClassInstanceCreation",
                                                              location: {
                                                                  start: {
                                                                      column: 8,
                                                                      line: 10,
                                                                      offset: 576
                                                                  },
                                                                  end: {
                                                                      column: 26,
                                                                      line: 2,
                                                                      offset: 39
                                                                  }
                                                              },
                                                              expression: null,
                                                              typeArguments: [],
                                                              type: {
                                                                  node: "SimpleType",
                                                                  location: {
                                                                      start: {
                                                                          column: 12,
                                                                          line: 10,
                                                                          offset: 580
                                                                      },
                                                                      end: {
                                                                          column: 13,
                                                                          line: 2,
                                                                          offset: 26
                                                                      }
                                                                  },
                                                                  annotations: [],
                                                                  name: {
                                                                      node: "QualifiedName",
                                                                      location: {
                                                                          start: {
                                                                              column: 12,
                                                                              line: 10,
                                                                              offset: 580
                                                                          },
                                                                          end: {
                                                                              column: 13,
                                                                              line: 2,
                                                                              offset: 26
                                                                          }
                                                                      },
                                                                      qualifier: {
                                                                          node: "QualifiedName",
                                                                          location: {
                                                                              start: {
                                                                                  column: 12,
                                                                                  line: 10,
                                                                                  offset: 580
                                                                              },
                                                                              end: {
                                                                                  column: 6,
                                                                                  line: 2,
                                                                                  offset: 19
                                                                              }
                                                                          },
                                                                          qualifier: {
                                                                              node: "SimpleName",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 12,
                                                                                      line: 10,
                                                                                      offset: 580
                                                                                  },
                                                                                  end: {
                                                                                      column: 1,
                                                                                      line: 2,
                                                                                      offset: 14
                                                                                  }
                                                                              },
                                                                              identifier: "java",
                                                                              var: false
                                                                          },
                                                                          name: {
                                                                              node: "SimpleName",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 17,
                                                                                      line: 10,
                                                                                      offset: 585
                                                                                  },
                                                                                  end: {
                                                                                      column: 1,
                                                                                      line: 2,
                                                                                      offset: 14
                                                                                  }
                                                                              },
                                                                              identifier: "lang",
                                                                              var: false
                                                                          }
                                                                      },
                                                                      name: {
                                                                          node: "SimpleName",
                                                                          location: {
                                                                              start: {
                                                                                  column: 22,
                                                                                  line: 10,
                                                                                  offset: 590
                                                                              },
                                                                              end: {
                                                                                  column: 3,
                                                                                  line: 2,
                                                                                  offset: 16
                                                                              }
                                                                          },
                                                                          identifier: "String",
                                                                          var: false
                                                                      }
                                                                  }
                                                              },
                                                              arguments: [
                                                                  {
                                                                      node: "StringLiteral",
                                                                      location: {
                                                                          start: {
                                                                              column: 29,
                                                                              line: 10,
                                                                              offset: 597
                                                                          },
                                                                          end: {
                                                                              column: 4,
                                                                              line: 2,
                                                                              offset: 17
                                                                          }
                                                                      },
                                                                      escapedValue: "\"hello\""
                                                                  }
                                                              ],
                                                              anonymousClassDeclaration: null
                                                          },
                                                          typeArguments: [],
                                                          name: {
                                                              node: "SimpleName",
                                                              location: {
                                                                  start: {
                                                                      column: 38,
                                                                      line: 10,
                                                                      offset: 606
                                                                  },
                                                                  end: {
                                                                      column: 5,
                                                                      line: 2,
                                                                      offset: 18
                                                                  }
                                                              },
                                                              identifier: "hashCode",
                                                              var: false
                                                          },
                                                          arguments: [
                                                              {
                                                                  node: "StringLiteral",
                                                                  location: {
                                                                      start: {
                                                                          column: 47,
                                                                          line: 10,
                                                                          offset: 615
                                                                      },
                                                                      end: {
                                                                          column: 4,
                                                                          line: 2,
                                                                          offset: 17
                                                                      }
                                                                  },
                                                                  escapedValue: "\"hello\""
                                                              }
                                                          ]
                                                      },
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 56,
                                                                  line: 10,
                                                                  offset: 624
                                                              },
                                                              end: {
                                                                  column: 11,
                                                                  line: 1,
                                                                  offset: 11
                                                              }
                                                          },
                                                          identifier: "h",
                                                          var: false
                                                      }
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 58,
                                                              line: 10,
                                                              offset: 626
                                                          },
                                                          end: {
                                                              column: 11,
                                                              line: 1,
                                                              offset: 11
                                                          }
                                                      },
                                                      identifier: "v",
                                                      var: false
                                                  }
                                              },
                                              operator: "++"
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 11,
                                                  offset: 670
                                              },
                                              end: {
                                                  column: 11,
                                                  line: 3,
                                                  offset: 69
                                              }
                                          },
                                          expression: {
                                              node: "PostfixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 11,
                                                      offset: 670
                                                  },
                                                  end: {
                                                      column: 10,
                                                      line: 3,
                                                      offset: 68
                                                  }
                                              },
                                              operand: {
                                                  node: "FieldAccess",
                                                  location: {
                                                      start: {
                                                          column: 8,
                                                          line: 11,
                                                          offset: 670
                                                      },
                                                      end: {
                                                          column: 8,
                                                          line: 3,
                                                          offset: 66
                                                      }
                                                  },
                                                  expression: {
                                                      node: "FieldAccess",
                                                      location: {
                                                          start: {
                                                              column: 8,
                                                              line: 11,
                                                              offset: 670
                                                          },
                                                          end: {
                                                              column: 2,
                                                              line: 3,
                                                              offset: 60
                                                          }
                                                      },
                                                      expression: {
                                                          node: "MethodInvocation",
                                                          location: {
                                                              start: {
                                                                  column: 8,
                                                                  line: 11,
                                                                  offset: 670
                                                              },
                                                              end: {
                                                                  column: 41,
                                                                  line: 2,
                                                                  offset: 54
                                                              }
                                                          },
                                                          expression: {
                                                              node: "FieldAccess",
                                                              location: {
                                                                  start: {
                                                                      column: 8,
                                                                      line: 11,
                                                                      offset: 670
                                                                  },
                                                                  end: {
                                                                      column: 37,
                                                                      line: 2,
                                                                      offset: 50
                                                                  }
                                                              },
                                                              expression: {
                                                                  node: "MethodInvocation",
                                                                  location: {
                                                                      start: {
                                                                          column: 8,
                                                                          line: 11,
                                                                          offset: 670
                                                                      },
                                                                      end: {
                                                                          column: 35,
                                                                          line: 2,
                                                                          offset: 48
                                                                      }
                                                                  },
                                                                  expression: {
                                                                      node: "ClassInstanceCreation",
                                                                      location: {
                                                                          start: {
                                                                              column: 8,
                                                                              line: 11,
                                                                              offset: 670
                                                                          },
                                                                          end: {
                                                                              column: 17,
                                                                              line: 2,
                                                                              offset: 30
                                                                          }
                                                                      },
                                                                      expression: null,
                                                                      typeArguments: [],
                                                                      type: {
                                                                          node: "SimpleType",
                                                                          location: {
                                                                              start: {
                                                                                  column: 12,
                                                                                  line: 11,
                                                                                  offset: 674
                                                                              },
                                                                              end: {
                                                                                  column: 4,
                                                                                  line: 2,
                                                                                  offset: 17
                                                                              }
                                                                          },
                                                                          annotations: [],
                                                                          name: {
                                                                              node: "SimpleName",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 12,
                                                                                      line: 11,
                                                                                      offset: 674
                                                                                  },
                                                                                  end: {
                                                                                      column: 4,
                                                                                      line: 2,
                                                                                      offset: 17
                                                                                  }
                                                                              },
                                                                              identifier: "String",
                                                                              var: false
                                                                          }
                                                                      },
                                                                      arguments: [
                                                                          {
                                                                              node: "StringLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 19,
                                                                                      line: 11,
                                                                                      offset: 681
                                                                                  },
                                                                                  end: {
                                                                                      column: 5,
                                                                                      line: 2,
                                                                                      offset: 18
                                                                                  }
                                                                              },
                                                                              escapedValue: "\"hello\""
                                                                          }
                                                                      ],
                                                                      anonymousClassDeclaration: null
                                                                  },
                                                                  typeArguments: [],
                                                                  name: {
                                                                      node: "SimpleName",
                                                                      location: {
                                                                          start: {
                                                                              column: 28,
                                                                              line: 11,
                                                                              offset: 690
                                                                          },
                                                                          end: {
                                                                              column: 6,
                                                                              line: 2,
                                                                              offset: 19
                                                                          }
                                                                      },
                                                                      identifier: "hashCode",
                                                                      var: false
                                                                  },
                                                                  arguments: [
                                                                      {
                                                                          node: "StringLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 37,
                                                                                  line: 11,
                                                                                  offset: 699
                                                                              },
                                                                              end: {
                                                                                  column: 5,
                                                                                  line: 2,
                                                                                  offset: 18
                                                                              }
                                                                          },
                                                                          escapedValue: "\"hello\""
                                                                      }
                                                                  ]
                                                              },
                                                              name: {
                                                                  node: "SimpleName",
                                                                  location: {
                                                                      start: {
                                                                          column: 46,
                                                                          line: 11,
                                                                          offset: 708
                                                                      },
                                                                      end: {
                                                                          column: 12,
                                                                          line: 1,
                                                                          offset: 12
                                                                      }
                                                                  },
                                                                  identifier: "h",
                                                                  var: false
                                                              }
                                                          },
                                                          typeArguments: [],
                                                          name: {
                                                              node: "SimpleName",
                                                              location: {
                                                                  start: {
                                                                      column: 48,
                                                                      line: 11,
                                                                      offset: 710
                                                                  },
                                                                  end: {
                                                                      column: 12,
                                                                      line: 1,
                                                                      offset: 12
                                                                  }
                                                              },
                                                              identifier: "v",
                                                              var: false
                                                          },
                                                          arguments: []
                                                      },
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 52,
                                                                  line: 11,
                                                                  offset: 714
                                                              },
                                                              end: {
                                                                  column: 3,
                                                                  line: 2,
                                                                  offset: 16
                                                              }
                                                          },
                                                          identifier: "hello",
                                                          var: false
                                                      }
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 58,
                                                              line: 11,
                                                              offset: 720
                                                          },
                                                          end: {
                                                              column: 3,
                                                              line: 2,
                                                              offset: 16
                                                          }
                                                      },
                                                      identifier: "world",
                                                      var: false
                                                  }
                                              },
                                              operator: "++"
                                          }
                                      },
                                      {
                                          node: "ExpressionStatement",
                                          location: {
                                              start: {
                                                  column: 8,
                                                  line: 12,
                                                  offset: 737
                                              },
                                              end: {
                                                  column: 12,
                                                  line: 3,
                                                  offset: 70
                                              }
                                          },
                                          expression: {
                                              node: "PrefixExpression",
                                              location: {
                                                  start: {
                                                      column: 8,
                                                      line: 12,
                                                      offset: 737
                                                  },
                                                  end: {
                                                      column: 11,
                                                      line: 3,
                                                      offset: 69
                                                  }
                                              },
                                              operator: "++",
                                              operand: {
                                                  node: "FieldAccess",
                                                  location: {
                                                      start: {
                                                          column: 10,
                                                          line: 12,
                                                          offset: 739
                                                      },
                                                      end: {
                                                          column: 9,
                                                          line: 3,
                                                          offset: 67
                                                      }
                                                  },
                                                  expression: {
                                                      node: "FieldAccess",
                                                      location: {
                                                          start: {
                                                              column: 10,
                                                              line: 12,
                                                              offset: 739
                                                          },
                                                          end: {
                                                              column: 3,
                                                              line: 3,
                                                              offset: 61
                                                          }
                                                      },
                                                      expression: {
                                                          node: "MethodInvocation",
                                                          location: {
                                                              start: {
                                                                  column: 10,
                                                                  line: 12,
                                                                  offset: 739
                                                              },
                                                              end: {
                                                                  column: 42,
                                                                  line: 2,
                                                                  offset: 55
                                                              }
                                                          },
                                                          expression: {
                                                              node: "FieldAccess",
                                                              location: {
                                                                  start: {
                                                                      column: 10,
                                                                      line: 12,
                                                                      offset: 739
                                                                  },
                                                                  end: {
                                                                      column: 38,
                                                                      line: 2,
                                                                      offset: 51
                                                                  }
                                                              },
                                                              expression: {
                                                                  node: "MethodInvocation",
                                                                  location: {
                                                                      start: {
                                                                          column: 10,
                                                                          line: 12,
                                                                          offset: 739
                                                                      },
                                                                      end: {
                                                                          column: 36,
                                                                          line: 2,
                                                                          offset: 49
                                                                      }
                                                                  },
                                                                  expression: {
                                                                      node: "ClassInstanceCreation",
                                                                      location: {
                                                                          start: {
                                                                              column: 10,
                                                                              line: 12,
                                                                              offset: 739
                                                                          },
                                                                          end: {
                                                                              column: 18,
                                                                              line: 2,
                                                                              offset: 31
                                                                          }
                                                                      },
                                                                      expression: null,
                                                                      typeArguments: [],
                                                                      type: {
                                                                          node: "SimpleType",
                                                                          location: {
                                                                              start: {
                                                                                  column: 14,
                                                                                  line: 12,
                                                                                  offset: 743
                                                                              },
                                                                              end: {
                                                                                  column: 5,
                                                                                  line: 2,
                                                                                  offset: 18
                                                                              }
                                                                          },
                                                                          annotations: [],
                                                                          name: {
                                                                              node: "SimpleName",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 14,
                                                                                      line: 12,
                                                                                      offset: 743
                                                                                  },
                                                                                  end: {
                                                                                      column: 5,
                                                                                      line: 2,
                                                                                      offset: 18
                                                                                  }
                                                                              },
                                                                              identifier: "String",
                                                                              var: false
                                                                          }
                                                                      },
                                                                      arguments: [
                                                                          {
                                                                              node: "StringLiteral",
                                                                              location: {
                                                                                  start: {
                                                                                      column: 21,
                                                                                      line: 12,
                                                                                      offset: 750
                                                                                  },
                                                                                  end: {
                                                                                      column: 6,
                                                                                      line: 2,
                                                                                      offset: 19
                                                                                  }
                                                                              },
                                                                              escapedValue: "\"hello\""
                                                                          }
                                                                      ],
                                                                      anonymousClassDeclaration: null
                                                                  },
                                                                  typeArguments: [],
                                                                  name: {
                                                                      node: "SimpleName",
                                                                      location: {
                                                                          start: {
                                                                              column: 30,
                                                                              line: 12,
                                                                              offset: 759
                                                                          },
                                                                          end: {
                                                                              column: 7,
                                                                              line: 2,
                                                                              offset: 20
                                                                          }
                                                                      },
                                                                      identifier: "hashCode",
                                                                      var: false
                                                                  },
                                                                  arguments: [
                                                                      {
                                                                          node: "StringLiteral",
                                                                          location: {
                                                                              start: {
                                                                                  column: 39,
                                                                                  line: 12,
                                                                                  offset: 768
                                                                              },
                                                                              end: {
                                                                                  column: 6,
                                                                                  line: 2,
                                                                                  offset: 19
                                                                              }
                                                                          },
                                                                          escapedValue: "\"hello\""
                                                                      }
                                                                  ]
                                                              },
                                                              name: {
                                                                  node: "SimpleName",
                                                                  location: {
                                                                      start: {
                                                                          column: 48,
                                                                          line: 12,
                                                                          offset: 777
                                                                      },
                                                                      end: {
                                                                          column: 0,
                                                                          line: 2,
                                                                          offset: 13
                                                                      }
                                                                  },
                                                                  identifier: "h",
                                                                  var: false
                                                              }
                                                          },
                                                          typeArguments: [],
                                                          name: {
                                                              node: "SimpleName",
                                                              location: {
                                                                  start: {
                                                                      column: 50,
                                                                      line: 12,
                                                                      offset: 779
                                                                  },
                                                                  end: {
                                                                      column: 0,
                                                                      line: 2,
                                                                      offset: 13
                                                                  }
                                                              },
                                                              identifier: "v",
                                                              var: false
                                                          },
                                                          arguments: []
                                                      },
                                                      name: {
                                                          node: "SimpleName",
                                                          location: {
                                                              start: {
                                                                  column: 54,
                                                                  line: 12,
                                                                  offset: 783
                                                              },
                                                              end: {
                                                                  column: 4,
                                                                  line: 2,
                                                                  offset: 17
                                                              }
                                                          },
                                                          identifier: "hello",
                                                          var: false
                                                      }
                                                  },
                                                  name: {
                                                      node: "SimpleName",
                                                      location: {
                                                          start: {
                                                              column: 60,
                                                              line: 12,
                                                              offset: 789
                                                          },
                                                          end: {
                                                              column: 4,
                                                              line: 2,
                                                              offset: 17
                                                          }
                                                      },
                                                      identifier: "world",
                                                      var: false
                                                  }
                                              }
                                          }
                                      }
                                  ]
                              }
                          }
                      ]
                  }
              ],
              module: null
          }
      );
    });
    //
    // test("Primary ParExpression", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         i = (i);
    //         i = (i++);
    //         i = 3*(x+(1-i++))*(a+b);
    //         if (i++) i--;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ParenthesizedExpression",
    //                                             expression: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ParenthesizedExpression",
    //                                             expression: {
    //                                                 node: "PostfixExpression",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "++"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "InfixExpression",
    //                                             leftOperand: {
    //                                                 node: "InfixExpression",
    //                                                 leftOperand: {
    //                                                     node: "NumberLiteral",
    //                                                     token: "3"
    //                                                 },
    //                                                 operator: "*",
    //                                                 rightOperand: {
    //                                                     node: "ParenthesizedExpression",
    //                                                     expression: {
    //                                                         node: "InfixExpression",
    //                                                         leftOperand: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "x"
    //                                                         },
    //                                                         operator: "+",
    //                                                         rightOperand: {
    //                                                             node: "ParenthesizedExpression",
    //                                                             expression: {
    //                                                                 node: "InfixExpression",
    //                                                                 leftOperand: {
    //                                                                     node: "NumberLiteral",
    //                                                                     token: "1"
    //                                                                 },
    //                                                                 operator: "-",
    //                                                                 rightOperand: {
    //                                                                     node: "PostfixExpression",
    //                                                                     operand: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "i"
    //                                                                     },
    //                                                                     operator: "++"
    //                                                                 },
    //                                                             }
    //                                                         },
    //                                                     }
    //                                                 },
    //                                             },
    //                                             operator: "*",
    //                                             rightOperand: {
    //                                                 node: "ParenthesizedExpression",
    //                                                 expression: {
    //                                                     node: "InfixExpression",
    //                                                     leftOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "a"
    //                                                     },
    //                                                     operator: "+",
    //                                                     rightOperand: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "b"
    //                                                     },
    //                                                 }
    //                                             },
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "IfStatement",
    //                                     expression: {
    //                                         node: "PostfixExpression",
    //                                         operand: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "++"
    //                                     },
    //                                     thenStatement: {
    //                                         node: "ExpressionStatement",
    //                                         expression: {
    //                                             node: "PostfixExpression",
    //                                             operand: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "i"
    //                                             },
    //                                             operator: "--"
    //                                         }
    //                                     },
    //                                     elseStatement: null
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Primary NonWildcardTypeArguments", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         <Integer>super();
    //         <Integer>super(a, b);
    //         <Integer>this();
    //         <Integer>this(a,b,c);
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Integer"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Integer"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: [
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ConstructorInvocation",
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Integer"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "ConstructorInvocation",
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Integer"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: [
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         }
    //                                     ]
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Primary this/super SuperSuffix", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         super();
    //         super(42);
    //         super(a, b, c);
    //         this();
    //         this(42);
    //         this(a,b,c);
    //         super.hello();
    //         super.hello(a, b, c);
    //         super.<Integer>hello();
    //         super.<Integer, String>hello(a, b, c);
    //         this.hello(a, b, c);
    //         this.hello.world();
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ConstructorInvocation",
    //                                     typeArguments: [],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "ConstructorInvocation",
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ConstructorInvocation",
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "SuperMethodInvocation",
    //                                         qualifier: null,
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "SuperMethodInvocation",
    //                                         qualifier: null,
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "b"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "c"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "SuperMethodInvocation",
    //                                         qualifier: null,
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Integer"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "SuperMethodInvocation",
    //                                         qualifier: null,
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Integer"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "b"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "c"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "ThisExpression",
    //                                             qualifier: null
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "b"
    //                                             },
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "c"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "ThisExpression",
    //                                                 qualifier: null
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             }
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Primary NEW", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         new String();
    //         new String(a);
    //         new java.util.Array(100);
    //         new String(new String(), 100);
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "String"
    //                                             }
    //                                         },
    //                                         arguments: [],
    //                                         anonymousClassDeclaration: null
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "String"
    //                                             }
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             }
    //                                         ],
    //                                         anonymousClassDeclaration: null
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "QualifiedName",
    //                                                     qualifier: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "java"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "util"
    //                                                     }
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Array"
    //                                                 }
    //                                             }
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "100"
    //                                             }
    //                                         ],
    //                                         anonymousClassDeclaration: null
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "String"
    //                                             }
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "ClassInstanceCreation",
    //                                                 expression: null,
    //                                                 typeArguments: [],
    //                                                 type: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "String"
    //                                                     }
    //                                                 },
    //                                                 arguments: [],
    //                                                 anonymousClassDeclaration: null
    //                                             },
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "100"
    //                                             }
    //                                         ],
    //                                         anonymousClassDeclaration: null
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Primary QualifiedIdentifierSuffix", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         c = Hello.World[].class;
    //         c = Hello.World[][].class;
    //         c = Hello[][][][].class;
    //         i = world[42];
    //         i = world[i++];
    //         i = hello.world[--i];
    //         synchronized(Test.class) {}
    //         synchronized(Hello.World.class){hello.world[--i]++;}
    //         hello.<String>world();
    //         hello.world.<String, Object>world(42);
    //         z = hello.world.<String, Object>world(42).x.field;
    //         hello.world.<String, Object>super();
    //         hello.world.<String, Object>super(42);
    //         x = super.field;
    //         x = super.field++;
    //         a = hello.world.super.field++;
    //         a = hello.world.super.field;
    //         b = super.field.subfield;
    //         x = this;
    //         y = this.a;
    //         this.b();
    //         this.a.b(42);
    //         hello.super();
    //         hello.world.super(42);
    //         hello.new World(){};
    //         hello.world.new <String>World(42){};
    //         hello.world.new <String>World<Object>(42){};
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "QualifiedName",
    //                                                         qualifier: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "Hello"
    //                                                         },
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "World"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "SimpleType",
    //                                                         name: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Hello"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "World"
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "ArrayType",
    //                                                         componentType: {
    //                                                             node: "ArrayType",
    //                                                             componentType: {
    //                                                                 node: "SimpleType",
    //                                                                 name: {
    //                                                                     node: "SimpleName",
    //                                                                     identifier: "Hello"
    //                                                                 }
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "world"
    //                                             },
    //                                             index: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "world"
    //                                             },
    //                                             index: {
    //                                                 node: "PostfixExpression",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 },
    //                                                 operator: "++"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "world"
    //                                                 }
    //                                             },
    //                                             index: {
    //                                                 node: "PrefixExpression",
    //                                                 operator: "--",
    //                                                 operand: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "i"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "SynchronizedStatement",
    //                                     expression: {
    //                                         node: "TypeLiteral",
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Test"
    //                                             }
    //                                         }
    //                                     },
    //                                     body: {
    //                                         node: "Block",
    //                                         statements: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "SynchronizedStatement",
    //                                     expression: {
    //                                         node: "TypeLiteral",
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Hello"
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "World"
    //                                                 }
    //                                             }
    //                                         }
    //                                     },
    //                                     body: {
    //                                         node: "Block",
    //                                         statements: [
    //                                             {
    //                                                 node: "ExpressionStatement",
    //                                                 expression: {
    //                                                     node: "PostfixExpression",
    //                                                     operand: {
    //                                                         node: "ArrayAccess",
    //                                                         array: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "hello"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "world"
    //                                                             }
    //                                                         },
    //                                                         index: {
    //                                                             node: "PrefixExpression",
    //                                                             operator: "--",
    //                                                             operand: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "i"
    //                                                             }
    //                                                         }
    //                                                     },
    //                                                     operator: "++"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "QualifiedName",
    //                                             qualifier: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "world"
    //                                             }
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Object"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "z"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "FieldAccess",
    //                                                 expression: {
    //                                                     node: "MethodInvocation",
    //                                                     expression: {
    //                                                         node: "QualifiedName",
    //                                                         qualifier: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "hello"
    //                                                         },
    //                                                         name: {
    //                                                             node: "SimpleName",
    //                                                             identifier: "world"
    //                                                         }
    //                                                     },
    //                                                     typeArguments: [
    //                                                         {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "String"
    //                                                             }
    //                                                         },
    //                                                         {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Object"
    //                                                             }
    //                                                         }
    //                                                     ],
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "world"
    //                                                     },
    //                                                     arguments: [
    //                                                         {
    //                                                             node: "NumberLiteral",
    //                                                             token: "42"
    //                                                         }
    //                                                     ]
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "x"
    //                                                 }
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "field"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: {
    //                                         node: "QualifiedName",
    //                                         qualifier: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         }
    //                                     },
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "String"
    //                                             }
    //                                         },
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Object"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: {
    //                                         node: "QualifiedName",
    //                                         qualifier: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         }
    //                                     },
    //                                     typeArguments: [
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "String"
    //                                             }
    //                                         },
    //                                         {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Object"
    //                                             }
    //                                         }
    //                                     ],
    //                                     arguments: [
    //                                         {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "SuperFieldAccess",
    //                                             qualifier: null,
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "field"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PostfixExpression",
    //                                             operand: {
    //                                                 node: "SuperFieldAccess",
    //                                                 qualifier: null,
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "field"
    //                                                 }
    //                                             },
    //                                             operator: "++"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PostfixExpression",
    //                                             operand: {
    //                                                 node: "SuperFieldAccess",
    //                                                 qualifier: {
    //                                                     node: "QualifiedName",
    //                                                     qualifier: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "hello"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "world"
    //                                                     }
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "field"
    //                                                 }
    //                                             },
    //                                             operator: "++"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "a"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "SuperFieldAccess",
    //                                             qualifier: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "world"
    //                                                 }
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "field"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "SuperFieldAccess",
    //                                                 qualifier: null,
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "field"
    //                                                 }
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "subfield"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ThisExpression",
    //                                             qualifier: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "y"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "ThisExpression",
    //                                                 qualifier: null
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "ThisExpression",
    //                                             qualifier: null
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "ThisExpression",
    //                                                 qualifier: null
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             }
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "b"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: {
    //                                         node: "SimpleName",
    //                                         identifier: "hello"
    //                                     },
    //                                     typeArguments: [],
    //                                     arguments: []
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: {
    //                                         node: "QualifiedName",
    //                                         qualifier: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         }
    //                                     },
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: {
    //                                             node: "SimpleName",
    //                                             identifier: "hello"
    //                                         },
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "World"
    //                                             }
    //                                         },
    //                                         arguments: [],
    //                                         anonymousClassDeclaration: {
    //                                             node: "AnonymousClassDeclaration",
    //                                             bodyDeclarations: []
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: {
    //                                             node: "QualifiedName",
    //                                             qualifier: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "world"
    //                                             }
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "World"
    //                                             }
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ],
    //                                         anonymousClassDeclaration: {
    //                                             node: "AnonymousClassDeclaration",
    //                                             bodyDeclarations: []
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: {
    //                                             node: "QualifiedName",
    //                                             qualifier: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "world"
    //                                             }
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         type: {
    //                                             node: "ParameterizedType",
    //                                             type: {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "World"
    //                                                 }
    //                                             },
    //                                             typeArguments: [
    //                                                 {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Object"
    //                                                     }
    //                                                 }
    //                                             ]
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ],
    //                                         anonymousClassDeclaration: {
    //                                             node: "AnonymousClassDeclaration",
    //                                             bodyDeclarations: []
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Primary rest", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         c = Hello.World++;
    //         t = int.class;
    //         y = int[].class;
    //         i = int[][][].class;
    //         cls = void.class;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "PostfixExpression",
    //                                             operand: {
    //                                                 node: "QualifiedName",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Hello"
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "World"
    //                                                 }
    //                                             },
    //                                             operator: "++"
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "t"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "PrimitiveType",
    //                                                 primitiveTypeCode: "int"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "y"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "PrimitiveType",
    //                                                     primitiveTypeCode: "int"
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "i"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "ArrayType",
    //                                                         componentType: {
    //                                                             node: "PrimitiveType",
    //                                                             primitiveTypeCode: "int"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "cls"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "TypeLiteral",
    //                                             type: {
    //                                                 node: "PrimitiveType",
    //                                                 primitiveTypeCode: "void"
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //   );
    // });
    //
    // test("Selector SuperSuffix", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         this.world(42);
    //         int a = this.world;
    //         this.<String>world(42);
    //         super(42);
    //         x = super.hello;
    //         super.hello.world(42);
    //         this.hello.new Runnable(){ @override void run(){} };
    //         Outer.this.hello.new <String>Runnable(){ @override void run(){} };
    //         super.hello[42]++;
    //         this.hello[42]++;
    //         Outer.this.hello[42]++;
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "ThisExpression",
    //                                             qualifier: null
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "PrimitiveType",
    //                                         primitiveTypeCode: "int"
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "a"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "FieldAccess",
    //                                                 expression: {
    //                                                     node: "ThisExpression",
    //                                                     qualifier: null
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "world"
    //                                                 }
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "ThisExpression",
    //                                             qualifier: null
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "SuperConstructorInvocation",
    //                                     expression: null,
    //                                     typeArguments: [],
    //                                     arguments: [
    //                                         {
    //                                             node: "NumberLiteral",
    //                                             token: "42"
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "SuperFieldAccess",
    //                                             qualifier: null,
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: {
    //                                             node: "SuperFieldAccess",
    //                                             qualifier: null,
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             }
    //                                         },
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "world"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "ThisExpression",
    //                                                 qualifier: null
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             }
    //                                         },
    //                                         typeArguments: [],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Runnable"
    //                                             }
    //                                         },
    //                                         arguments: [],
    //                                         anonymousClassDeclaration: {
    //                                             node: "AnonymousClassDeclaration",
    //                                             bodyDeclarations: [
    //                                                 {
    //                                                     node: "MethodDeclaration",
    //                                                     modifiers: [
    //                                                         {
    //                                                             node: "MarkerAnnotation",
    //                                                             typeName: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "override"
    //                                                             }
    //                                                         }
    //                                                     ],
    //                                                     constructor: false,
    //                                                     typeParameters: [],
    //                                                     returnType2: {
    //                                                         node: "PrimitiveType",
    //                                                         primitiveTypeCode: "void"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "run"
    //                                                     },
    //                                                     parameters: [],
    //                                                     extraDimensions: 0,
    //                                                     thrownExceptions: [],
    //                                                     body: {
    //                                                         node: "Block",
    //                                                         statements: []
    //                                                     }
    //                                                 }
    //                                             ]
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "ClassInstanceCreation",
    //                                         expression: {
    //                                             node: "FieldAccess",
    //                                             expression: {
    //                                                 node: "ThisExpression",
    //                                                 qualifier: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "Outer"
    //                                                 }
    //                                             },
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "hello"
    //                                             }
    //                                         },
    //                                         typeArguments: [
    //                                             {
    //                                                 node: "SimpleType",
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "String"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         type: {
    //                                             node: "SimpleType",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "Runnable"
    //                                             }
    //                                         },
    //                                         arguments: [],
    //                                         anonymousClassDeclaration: {
    //                                             node: "AnonymousClassDeclaration",
    //                                             bodyDeclarations: [
    //                                                 {
    //                                                     node: "MethodDeclaration",
    //                                                     modifiers: [
    //                                                         {
    //                                                             node: "MarkerAnnotation",
    //                                                             typeName: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "override"
    //                                                             }
    //                                                         }
    //                                                     ],
    //                                                     constructor: false,
    //                                                     typeParameters: [],
    //                                                     returnType2: {
    //                                                         node: "PrimitiveType",
    //                                                         primitiveTypeCode: "void"
    //                                                     },
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "run"
    //                                                     },
    //                                                     parameters: [],
    //                                                     extraDimensions: 0,
    //                                                     thrownExceptions: [],
    //                                                     body: {
    //                                                         node: "Block",
    //                                                         statements: []
    //                                                     }
    //                                                 }
    //                                             ]
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "PostfixExpression",
    //                                         operand: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "SuperFieldAccess",
    //                                                 qualifier: null,
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 }
    //                                             },
    //                                             index: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         },
    //                                         operator: "++"
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "PostfixExpression",
    //                                         operand: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "FieldAccess",
    //                                                 expression: {
    //                                                     node: "ThisExpression",
    //                                                     qualifier: null
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 }
    //                                             },
    //                                             index: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         },
    //                                         operator: "++"
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "PostfixExpression",
    //                                         operand: {
    //                                             node: "ArrayAccess",
    //                                             array: {
    //                                                 node: "FieldAccess",
    //                                                 expression: {
    //                                                     node: "ThisExpression",
    //                                                     qualifier: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Outer"
    //                                                     }
    //                                                 },
    //                                                 name: {
    //                                                     node: "SimpleName",
    //                                                     identifier: "hello"
    //                                                 }
    //                                             },
    //                                             index: {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         },
    //                                         operator: "++"
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //  );
    // });
    //
    // test("Expressions rest", function(assert) {
    //   var src = multiline(function(){/*
    //     class Test {
    //       public static void main(String[] args) {
    //         c = new byte[]{42};
    //         c = new short[];
    //         c = new int[5][];
    //         c = new long[5][42][];
    //         c = new float[5][42][x];
    //         c = new double[5][42][x][];
    //         boolean[] c = new boolean[42];
    //         c = new Hello[] {new Hello(), new Hello(42), new Hello(world)};
    //         c = new Hello.World[][] {
    //           {new Hello(), new Hello(42), new Hello(){ @override world(){} }},
    //           {new Hello<String>(){}, new Hello<String>(42), new Hello(world)}
    //         };
    //         x();
    //         x(42);
    //         x(y, 42);
    //       }
    //     }
    //   */});
    //   assert.deepEqual(
    //     JavaParser.parse(src)
    //     ,
    //     {
    //         node: "CompilationUnit",
    //         package: null,
    //         imports: [],
    //         types: [
    //             {
    //                 node: "TypeDeclaration",
    //                 modifiers: [],
    //                 interface: false,
    //                 name: {
    //                     node: "SimpleName",
    //                     identifier: "Test"
    //                 },
    //                 typeParameters: [],
    //                 superclassType: null,
    //                 superInterfaceTypes: [],
    //                 bodyDeclarations: [
    //                     {
    //                         node: "MethodDeclaration",
    //                         modifiers: [
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "public"
    //                             },
    //                             {
    //                                 node: "Modifier",
    //                                 keyword: "static"
    //                             }
    //                         ],
    //                         constructor: false,
    //                         typeParameters: [],
    //                         returnType2: {
    //                             node: "PrimitiveType",
    //                             primitiveTypeCode: "void"
    //                         },
    //                         name: {
    //                             node: "SimpleName",
    //                             identifier: "main"
    //                         },
    //                         parameters: [
    //                             {
    //                                 node: "SingleVariableDeclaration",
    //                                 modifiers: [],
    //                                 type: {
    //                                     node: "ArrayType",
    //                                     componentType: {
    //                                         node: "SimpleType",
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "String"
    //                                         }
    //                                     }
    //                                 },
    //                                 varargs: false,
    //                                 name: {
    //                                     node: "SimpleName",
    //                                     identifier: "args"
    //                                 },
    //                                 extraDimensions: 0,
    //                                 initializer: null
    //                             }
    //                         ],
    //                         extraDimensions: 0,
    //                         thrownExceptions: [],
    //                         body: {
    //                             node: "Block",
    //                             statements: [
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "PrimitiveType",
    //                                                     primitiveTypeCode: "byte"
    //                                                 }
    //                                             },
    //                                             dimensions: [],
    //                                             initializer: {
    //                                                 node: "ArrayInitializer",
    //                                                 expressions: [
    //                                                     {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     }
    //                                                 ]
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "PrimitiveType",
    //                                                     primitiveTypeCode: "short"
    //                                                 }
    //                                             },
    //                                             dimensions: [],
    //                                             initializer: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "PrimitiveType",
    //                                                         primitiveTypeCode: "int"
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "5"
    //                                                 }
    //                                             ],
    //                                             initializer: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "ArrayType",
    //                                                         componentType: {
    //                                                             node: "PrimitiveType",
    //                                                             primitiveTypeCode: "long"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "5"
    //                                                 },
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 }
    //                                             ],
    //                                             initializer: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "ArrayType",
    //                                                         componentType: {
    //                                                             node: "PrimitiveType",
    //                                                             primitiveTypeCode: "float"
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "5"
    //                                                 },
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                                 {
    //                                                     node: "SimpleName",
    //                                                     identifier: "x"
    //                                                 }
    //                                             ],
    //                                             initializer: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "ArrayType",
    //                                                         componentType: {
    //                                                             node: "ArrayType",
    //                                                             componentType: {
    //                                                                 node: "PrimitiveType",
    //                                                                 primitiveTypeCode: "double"
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "5"
    //                                                 },
    //                                                 {
    //                                                     node: "NumberLiteral",
    //                                                     token: "42"
    //                                                 },
    //                                                 {
    //                                                     node: "SimpleName",
    //                                                     identifier: "x"
    //                                                 }
    //                                             ],
    //                                             initializer: null
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "VariableDeclarationStatement",
    //                                     modifiers: [],
    //                                     type: {
    //                                         node: "ArrayType",
    //                                         componentType: {
    //                                             node: "PrimitiveType",
    //                                             primitiveTypeCode: "boolean"
    //                                         }
    //                                     },
    //                                     fragments: [
    //                                         {
    //                                             node: "VariableDeclarationFragment",
    //                                             name: {
    //                                                 node: "SimpleName",
    //                                                 identifier: "c"
    //                                             },
    //                                             extraDimensions: 0,
    //                                             initializer: {
    //                                                 node: "ArrayCreation",
    //                                                 type: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "PrimitiveType",
    //                                                         primitiveTypeCode: "boolean"
    //                                                     }
    //                                                 },
    //                                                 dimensions: [
    //                                                     {
    //                                                         node: "NumberLiteral",
    //                                                         token: "42"
    //                                                     }
    //                                                 ],
    //                                                 initializer: null
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "SimpleType",
    //                                                     name: {
    //                                                         node: "SimpleName",
    //                                                         identifier: "Hello"
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [],
    //                                             initializer: {
    //                                                 node: "ArrayInitializer",
    //                                                 expressions: [
    //                                                     {
    //                                                         node: "ClassInstanceCreation",
    //                                                         expression: null,
    //                                                         typeArguments: [],
    //                                                         type: {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Hello"
    //                                                             }
    //                                                         },
    //                                                         arguments: [],
    //                                                         anonymousClassDeclaration: null
    //                                                     },
    //                                                     {
    //                                                         node: "ClassInstanceCreation",
    //                                                         expression: null,
    //                                                         typeArguments: [],
    //                                                         type: {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Hello"
    //                                                             }
    //                                                         },
    //                                                         arguments: [
    //                                                             {
    //                                                                 node: "NumberLiteral",
    //                                                                 token: "42"
    //                                                             }
    //                                                         ],
    //                                                         anonymousClassDeclaration: null
    //                                                     },
    //                                                     {
    //                                                         node: "ClassInstanceCreation",
    //                                                         expression: null,
    //                                                         typeArguments: [],
    //                                                         type: {
    //                                                             node: "SimpleType",
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Hello"
    //                                                             }
    //                                                         },
    //                                                         arguments: [
    //                                                             {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "world"
    //                                                             }
    //                                                         ],
    //                                                         anonymousClassDeclaration: null
    //                                                     }
    //                                                 ]
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "Assignment",
    //                                         leftHandSide: {
    //                                             node: "SimpleName",
    //                                             identifier: "c"
    //                                         },
    //                                         operator: "=",
    //                                         rightHandSide: {
    //                                             node: "ArrayCreation",
    //                                             type: {
    //                                                 node: "ArrayType",
    //                                                 componentType: {
    //                                                     node: "ArrayType",
    //                                                     componentType: {
    //                                                         node: "SimpleType",
    //                                                         name: {
    //                                                             node: "QualifiedName",
    //                                                             qualifier: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "Hello"
    //                                                             },
    //                                                             name: {
    //                                                                 node: "SimpleName",
    //                                                                 identifier: "World"
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 }
    //                                             },
    //                                             dimensions: [],
    //                                             initializer: {
    //                                                 node: "ArrayInitializer",
    //                                                 expressions: [
    //                                                     {
    //                                                         node: "ArrayInitializer",
    //                                                         expressions: [
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "SimpleType",
    //                                                                     name: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "Hello"
    //                                                                     }
    //                                                                 },
    //                                                                 arguments: [],
    //                                                                 anonymousClassDeclaration: null
    //                                                             },
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "SimpleType",
    //                                                                     name: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "Hello"
    //                                                                     }
    //                                                                 },
    //                                                                 arguments: [
    //                                                                     {
    //                                                                         node: "NumberLiteral",
    //                                                                         token: "42"
    //                                                                     }
    //                                                                 ],
    //                                                                 anonymousClassDeclaration: null
    //                                                             },
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "SimpleType",
    //                                                                     name: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "Hello"
    //                                                                     }
    //                                                                 },
    //                                                                 arguments: [],
    //                                                                 anonymousClassDeclaration: {
    //                                                                     node: "AnonymousClassDeclaration",
    //                                                                     bodyDeclarations: [
    //                                                                         {
    //                                                                             node: "MethodDeclaration",
    //                                                                             modifiers: [
    //                                                                                 {
    //                                                                                     node: "MarkerAnnotation",
    //                                                                                     typeName: {
    //                                                                                         node: "SimpleName",
    //                                                                                         identifier: "override"
    //                                                                                     }
    //                                                                                 }
    //                                                                             ],
    //                                                                             constructor: true,
    //                                                                             typeParameters: [],
    //                                                                             returnType2: null,
    //                                                                             name: {
    //                                                                                 node: "SimpleName",
    //                                                                                 identifier: "world"
    //                                                                             },
    //                                                                             parameters: [],
    //                                                                             extraDimensions: 0,
    //                                                                             thrownExceptions: [],
    //                                                                             body: {
    //                                                                                 node: "Block",
    //                                                                                 statements: []
    //                                                                             }
    //                                                                         }
    //                                                                     ]
    //                                                                 }
    //                                                             }
    //                                                         ]
    //                                                     },
    //                                                     {
    //                                                         node: "ArrayInitializer",
    //                                                         expressions: [
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "ParameterizedType",
    //                                                                     type: {
    //                                                                         node: "SimpleType",
    //                                                                         name: {
    //                                                                             node: "SimpleName",
    //                                                                             identifier: "Hello"
    //                                                                         }
    //                                                                     },
    //                                                                     typeArguments: [
    //                                                                         {
    //                                                                             node: "SimpleType",
    //                                                                             name: {
    //                                                                                 node: "SimpleName",
    //                                                                                 identifier: "String"
    //                                                                             }
    //                                                                         }
    //                                                                     ]
    //                                                                 },
    //                                                                 arguments: [],
    //                                                                 anonymousClassDeclaration: {
    //                                                                     node: "AnonymousClassDeclaration",
    //                                                                     bodyDeclarations: []
    //                                                                 }
    //                                                             },
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "ParameterizedType",
    //                                                                     type: {
    //                                                                         node: "SimpleType",
    //                                                                         name: {
    //                                                                             node: "SimpleName",
    //                                                                             identifier: "Hello"
    //                                                                         }
    //                                                                     },
    //                                                                     typeArguments: [
    //                                                                         {
    //                                                                             node: "SimpleType",
    //                                                                             name: {
    //                                                                                 node: "SimpleName",
    //                                                                                 identifier: "String"
    //                                                                             }
    //                                                                         }
    //                                                                     ]
    //                                                                 },
    //                                                                 arguments: [
    //                                                                     {
    //                                                                         node: "NumberLiteral",
    //                                                                         token: "42"
    //                                                                     }
    //                                                                 ],
    //                                                                 anonymousClassDeclaration: null
    //                                                             },
    //                                                             {
    //                                                                 node: "ClassInstanceCreation",
    //                                                                 expression: null,
    //                                                                 typeArguments: [],
    //                                                                 type: {
    //                                                                     node: "SimpleType",
    //                                                                     name: {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "Hello"
    //                                                                     }
    //                                                                 },
    //                                                                 arguments: [
    //                                                                     {
    //                                                                         node: "SimpleName",
    //                                                                         identifier: "world"
    //                                                                     }
    //                                                                 ],
    //                                                                 anonymousClassDeclaration: null
    //                                                             }
    //                                                         ]
    //                                                     }
    //                                                 ]
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         arguments: []
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 },
    //                                 {
    //                                     node: "ExpressionStatement",
    //                                     expression: {
    //                                         node: "MethodInvocation",
    //                                         expression: null,
    //                                         typeArguments: [],
    //                                         name: {
    //                                             node: "SimpleName",
    //                                             identifier: "x"
    //                                         },
    //                                         arguments: [
    //                                             {
    //                                                 node: "SimpleName",
    //                                                 identifier: "y"
    //                                             },
    //                                             {
    //                                                 node: "NumberLiteral",
    //                                                 token: "42"
    //                                             }
    //                                         ]
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // );
    // });
    //
