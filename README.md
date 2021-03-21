# JavaScript Java Parser [![Build Status](https://travis-ci.org/mazko/jsjavaparser.svg?branch=master)](https://travis-ci.org/mazko/jsjavaparser) [![Coverage Status](https://coveralls.io/repos/mazko/jsjavaparser/badge.svg?branch=master&service=github)](https://coveralls.io/github/mazko/jsjavaparser?branch=master) [![npm version](https://badge.fury.io/js/java-parser.svg)](http://badge.fury.io/js/java-parser)

- [Online Demo](http://mazko.github.io/jsjavaparser)

- [ESJava Transpiler](http://mazko.github.io/ESJava)

- [Eclipse](http://help.eclipse.org/juno/topic/org.eclipse.jdt.doc.isv/reference/api/org/eclipse/jdt/core/dom/AST.html) Like AST

- [PEG.js](http://pegjs.org/) Grammar 

- [Java Tool](tools/EclipseAST/run.sh) with JSON AST output for test purposes

- BUILD: ```bash -c 'npm i && npm run build-min'```

[Demo](http://mazko.github.io/jsjavaparser/)

### Example Command Line:

    ~$ npm i -g java-parser

    ~$ echo '
    class HelloWorld {
      final int UNIVERSE = 42;
    }
    ' > HelloWorld.java

    ~$ java-parser HelloWorld.java
    {
      "node": "CompilationUnit",
      "types": [
        {
          "node": "TypeDeclaration",
          "name": {
            "identifier": "HelloWorld",
            "node": "SimpleName"
          },
          "superInterfaceTypes": [],
          "superclassType": null,
          "bodyDeclarations": [
            {
              "node": "FieldDeclaration",
              "fragments": [
                {
                  "node": "VariableDeclarationFragment",
                  "name": {
                    "identifier": "UNIVERSE",
                    "node": "SimpleName"
                  },
                  "extraDimensions": 0,
                  "initializer": {
                    "node": "NumberLiteral",
                    "token": "42"
                  }
                }
              ],
              "type": {
                "node": "PrimitiveType",
                "primitiveTypeCode": "int"
              },
              "modifiers": [
                {
                  "node": "Modifier",
                  "keyword": "final"
                }
              ]
            }
          ],
          "typeParameters": [],
          "interface": false,
          "modifiers": []
        }
      ],
      "package": null,
      "imports": []
    }

### Example Program:

    ~$ npm i java-parser

    ~$ echo '
        var japa = require("java-parser");
        console.log(japa.parse("package hello;"));
      ' | node
      { node: 'CompilationUnit',
        types: [],
        package: 
         { node: 'PackageDeclaration',
           name: { identifier: 'hello', node: 'SimpleName' },
           annotations: [] },
        imports: [] }