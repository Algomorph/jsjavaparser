const JavaParser = require('../../lib/javaparser15_node');
const multiline = require('multiline')

test("ExpressionStatement", () => {
    const src = multiline(() => {/*
        package sysImplementation;
        
        public class MapOfCodes {
        
        	static private int [] map; 
        
        
        
        // 	public static void makeMap(String [] data)
        // 	{
        // 		map = new int[2627];
        //
        // 		for (int iterator = 0; iterator < data.length; iterator++) {
        //
        // 			String code = data[iterator];
        //
        // 			char first = code.charAt(0);
        // 			char second = code.charAt(1);
        //
        // 			int firstValue = first - 96;
        // 			int secondValue = second - 96;
        //
        // 			map[(100*firstValue) + secondValue]++;
        //
        //
        // 		}
        // 	}
        //
        //
        	public static int getValue(String key)
        	{
        
        		String code = key;
        
        		char first = code.charAt(0);
        		char second = code.charAt(1);
        
        		int firstValue = first - 96;
        		int secondValue = second - 96;
        
        		int value = map[(100*firstValue) + secondValue];
        
        		return value;
        
        	}
        //
        //
        // 	public static void resetCount (String key)
        // 	{
        //
        // 		String code = key;
        //
        // 		char first = code.charAt(0);
        // 		char second = code.charAt(1);
        //
        // 		int firstValue = first - 96;
        // 		int secondValue = second - 96;
        //
        // 		map[(100*firstValue) + secondValue] = 0;
        // 	}
        //
        //
        // 	public static void put(String key)
        // 	{
        // 		String code = key;
        //
        // 		char first = code.charAt(0);
        // 		char second = code.charAt(1);
        //
        // 		int firstValue = first - 96;
        // 		int secondValue = second - 96;
        //
        // 		map[(100*firstValue) + secondValue]++;
        //
        // 	}
        //
        //
        // 	public static String sort(boolean forward)
        // 	{
        //
        // 		String toReturn = "";
        // 		boolean foundFirst = false;
        //
        // 		for (int iterator = 0; iterator< map.length; iterator++) {
        //
        // 			if (!forward) {
        //
        // 				int newIterator = map.length - 1 - iterator;
        //
        // 				if (map[newIterator] > 0) {
        //
        //
        // 					if (foundFirst == false) {
        //
        // 						char secondLetter = (char)((newIterator % 100) + 96);
        // 						char firstLetter = (char) (((newIterator - (newIterator % 100)) / 100) + 96);
        //
        // 						toReturn+= "" + firstLetter+secondLetter;
        // 						foundFirst = true;
        // 					} else {
        // 						char secondLetter = (char)((newIterator % 100) + 96);
        // 						char firstLetter = (char) (((newIterator - (newIterator % 100)) / 100) + 96);
        // 						toReturn+= " " + firstLetter+secondLetter;
        // 					}
        // 				}
        // 			} else {
        //
        // 				if (map[iterator] > 0) {
        //
        //
        // 					if (foundFirst == false) {
        //
        // 						char secondLetter = (char)((iterator % 100) + 96);
        // 						char firstLetter = (char) (((iterator - (iterator % 100)) / 100) + 96);
        // 						toReturn+= "" + firstLetter+secondLetter;
        // 						foundFirst = true;
        //
        // 					} else {
        //
        // 						char secondLetter = (char)((iterator % 100) + 96);
        // 						char firstLetter = (char) (((iterator - (iterator % 100)) / 100) + 96);
        // 						toReturn+= " " + firstLetter+secondLetter;
        // 					}
        //
        // 				}
        // 			}
        //
        // 		}
        //
        // 		return toReturn;
        //
        // 	}
        
        
        	//can have ONE private method - name it whatever you want
        	// You can decide the type of the return value,
        	//and the types of the parameter(s) but no more than 1 parameters maximum
        	//helper method can be called from any and all of the functions above
        
        
        
        
        }
        
        */
    });
      const output = JavaParser.parse(src, {'addLocations': false});
    const ground_truth =
            {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [],
                name: {
                    node: "SimpleName",
                    identifier: "sysImplementation",
                    var: false
                }
            },
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "MapOfCodes",
                        var: false
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "ArrayType",
                                elementType: {
                                    node: "PrimitiveType",
                                    annotations: [],
                                    primitiveTypeCode: "int"
                                },
                                dimensions: [
                                    {
                                        node: "Dimension",
                                        annotations: []
                                    }
                                ]
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "map",
                                        var: false
                                    },
                                    extraDimensions2: [],
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "MethodDeclaration",
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
                                annotations: [],
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "getValue",
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
                                            identifier: "String",
                                            var: false
                                        }
                                    },
                                    varargsAnnotations: [],
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "key",
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
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "SimpleType",
                                            annotations: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String",
                                                var: false
                                            }
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "code",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "key",
                                                    var: false
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "first",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "code",
                                                        var: false
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt",
                                                        var: false
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "second",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "code",
                                                        var: false
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt",
                                                        var: false
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "firstValue",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "first",
                                                        var: false
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "96"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "secondValue",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "second",
                                                        var: false
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "96"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            annotations: [],
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "value",
                                                    var: false
                                                },
                                                extraDimensions2: [],
                                                initializer: {
                                                    node: "ArrayAccess",
                                                    array: {
                                                        node: "SimpleName",
                                                        identifier: "map",
                                                        var: false
                                                    },
                                                    index: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "ParenthesizedExpression",
                                                            expression: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "100"
                                                                },
                                                                operator: "*",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "firstValue",
                                                                    var: false
                                                                },
                                                            }
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "secondValue",
                                                            var: false
                                                        },
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "value",
                                            var: false
                                        }
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
