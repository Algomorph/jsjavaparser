test("MapOfCodes", function (assert) {
    const src = multiline(function () {/*
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
        // 	public static int getValue(String key)
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
        // 		int value = map[(100*firstValue) + secondValue];
        //
        // 		return value;
        //
        // 	}
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
    assert.deepEqual(
        JavaParser.parse(src, {'addLocations': false})
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                javadoc: null,
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
                    javadoc: null,
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
                            javadoc: null,
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
                        }
                    ]
                }
            ],
            module: null
        }
    );
});
