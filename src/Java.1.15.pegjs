// Copyright (C) 2006, 2009, 2010, 2011, 2013 Roman R Redziejowski(www.romanredz.se).
// AST:  Copyright (C) 2015 Oleg Mazko
// Upgrade to Java 15 & addition of optional location nodes: Copyright (C) 2021 Gregory Kramida
{
  function extractOptional(optional, index, def) {
    def = typeof def !== 'undefined' ?  def : null;
    return optional ? optional[index] : def;
  }

  function extractList(list, index) {
    var result = new Array(list.length), i;

    for (i = 0; i < list.length; i++) {
      result[i] = list[i][index];
    }

    return result;
  }

  function buildList(first, rest, index) {
    return [first].concat(extractList(rest, index));
  }

  function buildTree(first, rest, builder) {
    var result = first, i;

    for (i = 0; i < rest.length; i++) {
      result = builder(result, rest[i]);
    }

    return result;
  }

  function addLocation(object, options){
    if(!options.hasOwnProperty("addLocations") || options.addLocations === true){
      object["location"] = location();
    }
    return object;
  }

  function nestParenthesizedExpressions(depth, expr, options){
    let stack = { node: 'ParenthesizedExpression', expression: expr };
    for(let level = 1; level < depth; level++){
      stack = { node: 'ParenthesizedExpression', expression: stack };
    }
    return addLocation(stack, options);
  }

  function buildInfixExpr(first, rest, options) {
    return buildTree(first, rest, function(result, element) {
      return addLocation({
        node:        'InfixExpression',
        operator:     element[0][0], // remove ending Spacing
        leftOperand:  result,
        rightOperand: element[1]
      }, options);
    });
  }

  function buildQualified(first, rest, index, options) {
    return buildTree(first, rest,
      function(result, element) {
        return addLocation({
          node:     'QualifiedName',
          qualifier: result,
          name:      element[index]
        }, options);
      }
    );
  }

  function popQualified(tree) {
    return tree.node === 'QualifiedName'
      ? { name: tree.name, expression: tree.qualifier }
      : { name: tree, expression: null };
  }

  function extractThrowsClassType(list) {
    return list.map(function(node){
      return node.name;
    });
  }

  function extractExpressions(list) {
    return list.map(function(node) {
      return node.expression;
    });
  }

  // function buildArrayTree(first, rest) {
  //   return buildTree(first, rest,
  //     function(result, element) {
  //     return {
  //       node:         'ArrayType',
  //       elementType: result,
  //       dimensions: 
  //       [{ 
  //         "annotations": first.annotations,
  //         "node": "Dimension"
  //       }]
  //     };
  //   });
  // }

  function buildArrayType(elementType, dims) {
    const dimensionObjects = []
    if(dims.length > 0){
      for (let i = 0; i < dims.length; i++){
        dimensionObjects.push(
          {
            "annotations": [],
            "node": "Dimension"
          }
        );
      }
      return {
        node:         'ArrayType',
        elementType:  elementType,
        dimensions: dimensionObjects
      };  
    } else {
      return elementType;
    }
  }

  function optionalList(value) {
    return value !== null ? value : [];
  }

  function extractOptionalList(list, index) {
    return optionalList(extractOptional(list, index));
  }

  function skipNulls(list) {
    return list.filter(function(v){ return v !== null; });
  }

  function makePrimitive(code, annotations=[]) {
    return {
      node:              'PrimitiveType',
      annotations:       annotations,
      primitiveTypeCode: code
    }
  }

  function makeModifier(keyword) {
    return {
      node:   'Modifier',
      keyword: keyword
    };
  }

  function makeCatchFinally(catchClauses, finallyBlock) {
      return {
        catchClauses: catchClauses,
        finally:      finallyBlock
      };
  }

  function buildTypeName(qual, args, rest, annotations=[]) {
    var first = args === null ? {
      node: 'SimpleType',
      annotations: annotations,
      name:  qual
    } : {
      node: 'ParameterizedType',
      type:  {
          node: 'SimpleType',
          annotations: annotations,
          name:  qual
      },
      typeArguments: args
    };

    return buildTree(first, rest,
      function(result, element) {
        var args = element[2];
        return args === null ? {
          node:     'QualifiedType',
          name:      element[1],
          qualifier: result
        } :
        {
          node: 'ParameterizedType',
          type:  {
            node:     'QualifiedType',
            name:      element[1],
            qualifier: result
          },
          typeArguments: args
        };
      }
    );
  }

  function mergeProps(obj, props) {
    var key;
    for (key in props) {
      if (props.hasOwnProperty(key)) {
        if (obj.hasOwnProperty(key)) {
          throw new Error(
            'Property ' + key + ' exists ' + line() + '\n' + text() +
            '\nCurrent value: ' + JSON.stringify(obj[key], null, 2) +
            '\nNew value: ' + JSON.stringify(props[key], null, 2)
          );
        } else {
          obj[key] = props[key];
        }
      }
    }
    return obj;
  }

  function buildSelectorTree(arg, sel, sels) {
    function getMergeVal(o,v) {
      switch(o.node){
        case 'SuperFieldAccess':
        case 'SuperMethodInvocation':
          return { qualifier: v };
        case 'ArrayAccess':
          return { array: v };
        default:
          return { expression: v };
      }
    }
    return buildTree(mergeProps(sel, getMergeVal(sel, arg)),
      sels, function(result, element) {
        return mergeProps(element, getMergeVal(element, result));
    });
  }

  function TODO() {
    throw new Error('TODO: not impl line ' + line() + '\n' + text());
  }
}

/* ---- Syntactic Grammar ----- */

//-------------------------------------------------------------------------
//  Compilation Unit
//-------------------------------------------------------------------------

CompilationUnit
    = Spacing pack:PackageDeclaration? imports:ImportDeclaration* types:TypeDeclaration* EOT
    {
      return {
        node:   'CompilationUnit',
        types:   skipNulls(types),
        package: pack,
        imports: skipNulls(imports),
        // module is actually determined via parsing of the separate module-info.java file,
        // which is separate from the actual Java source file. For now, treat it is a property 
        // that should be left as 'null' here then and populated later
        module: null 
      };
    }

PackageDeclaration
    = annot:Annotation* PACKAGE name:QualifiedIdentifier SEMI
    {
      return {
        node:       'PackageDeclaration',
        name:        name,
        annotations: annot
      };
    }

ImportDeclaration
    = IMPORT stat:STATIC? name:QualifiedIdentifier asterisk:(DOT STAR)? SEMI
    {
      return {
        node:    'ImportDeclaration',
        name:     name,
        static:   !!stat,
        onDemand: !!extractOptional(asterisk, 1)
      };
    }
    / SEMI
    { return null; }

    // Experiment shows that Java accepts dummy semicolon among
    // import declaration - which is not allowed according to JLS.

TypeDeclaration
    = modifiers:Modifier*
      type:(
          ClassDeclaration
        / EnumDeclaration
        / InterfaceDeclaration
        / AnnotationTypeDeclaration
      )
      { 
        return mergeProps(type, { 
          modifiers: modifiers
        }); 
      }
      / SEMI
      { return null; }

//-------------------------------------------------------------------------
//  Class Declaration
//-------------------------------------------------------------------------

ClassDeclaration
    = CLASS id:Identifier gen:TypeParameters? ext:(EXTENDS ClassType)? impl:(IMPLEMENTS ClassTypeList)? body:ClassBody
    {
      return addLocation({
        node:               'TypeDeclaration',
        name:                id,
        superInterfaceTypes: extractOptionalList(impl, 1),
        superclassType:      extractOptional(ext, 1),
        bodyDeclarations:    body,
        typeParameters:      optionalList(gen),
        interface:           false
      }, options);
    }

ClassBody
    = LWING decls:ClassBodyDeclaration* RWING
    { return skipNulls(decls); }

ClassBodyDeclaration
    = SEMI
    { return null; }
    / modifier:STATIC? body:Block                      // Static or Instance Initializer
    {
      return {
        node:     'Initializer',
        body:      body,
        modifiers: modifier === null ? [] : [makeModifier('static')]
      };
    }
    / modifiers:Modifier* member:MemberDecl            // ClassMemberDeclaration
    { return mergeProps(member, { modifiers: modifiers }); }

MemberDecl
    = params:TypeParameters
      rest:GenericMethodOrConstructorRest              // Generic Method or Constructor
    {
      return mergeProps(rest, addLocation({
        node:          'MethodDeclaration',
        typeParameters: params
      }, options));
    }
    / type:Type id:Identifier
      rest:MethodDeclaratorRest                        // Method (JLS 8.4)
    {
      return mergeProps(rest, addLocation({
        node:          'MethodDeclaration',
        returnType2:    type,
        name:           id,
        typeParameters: []
      }, options));
    }
    / VOID id:Identifier rest:VoidMethodDeclaratorRest // Void method (JLS 8.4)
    {
      return mergeProps(rest, addLocation({
        node:       'MethodDeclaration',
        returnType2: makePrimitive('void'),
        name:        id,
        constructor: false
      }, options));
    }
    / id:Identifier rest:ConstructorDeclaratorRest     // Constructor (JLS 8.8)
    {
      return mergeProps(rest, addLocation({
        node:           'MethodDeclaration',
        name:            id,
        typeParameters:  []
      }, options));
    }
    / type:Type decls:VariableDeclarators SEMI         // Field (JLS 8.3)
    {
      return addLocation({
        node:     'FieldDeclaration',
        fragments: decls,
        type:      type
      }, options);
    }
    / InterfaceDeclaration                             // Interface
    / ClassDeclaration                                 // Class
    / EnumDeclaration                                  // Enum
    / AnnotationTypeDeclaration                        // Annotation

GenericMethodOrConstructorRest
    = type:(Type / VOID { return makePrimitive('void'); })
      id:Identifier rest:MethodDeclaratorRest
    {
      return mergeProps(rest, {
        returnType2: type,
        name:        id
      });
    }
    / id:Identifier rest:ConstructorDeclaratorRest
    { return mergeProps(rest, { name: id }); }

MethodDeclaratorRest
    = receiver:ReceiverParameter ?
      params:FormalParameters dims:Dim*
      throws:(THROWS ClassTypeList)?
      body:(MethodBody / SEMI { return null; })
    {
      return {
        parameters:       params,
        thrownExceptionTypes: extractThrowsClassType(extractOptionalList(throws, 1)),
        extraDimensions2: dims,
        body:             body,
        constructor:      false,
        receiverQualifier: receiver === null ? null : receiver.receiverQualifier,
        receiverType: receiver === null ? null : receiver.receiverQualifier
      };
    }

VoidMethodDeclaratorRest
    = receiver:ReceiverParameter ?
      params:FormalParameters
      throws:(THROWS ClassTypeList)?
      body:(MethodBody / SEMI { return null; })
    {
      return {
        parameters:       params,
        thrownExceptionTypes: extractThrowsClassType(extractOptionalList(throws, 1)),
        body:             body,
        extraDimensions2: [],
        typeParameters:   [],
        receiverQualifier: receiver === null ? null : receiver.receiverQualifier,
        receiverType: receiver === null ? null : receiver.receiverQualifier
      };
    }

ConstructorDeclaratorRest
    = receiver:ReceiverParameter ? params:FormalParameters throws:(THROWS ClassTypeList)? body:MethodBody
    {
      return {
        parameters:       params,
        thrownExceptionTypes: extractThrowsClassType(extractOptionalList(throws, 1)),
        body:             body,
        returnType2:      null,
        constructor:      true,
        extraDimensions2: [],
        receiverQualifier: receiver === null ? null : receiver.receiverQualifier,
        receiverType: receiver === null ? null : receiver.receiverQualifier
      };
    }

MethodBody
    = Block

//-------------------------------------------------------------------------
//  Interface Declaration
//-------------------------------------------------------------------------

InterfaceDeclaration
    = INTERFACE id:Identifier gen:TypeParameters? ext:(EXTENDS ClassTypeList)? body:InterfaceBody
    {
      return addLocation({
          node:               'TypeDeclaration',
          name:                id,
          superInterfaceTypes: extractOptionalList(ext, 1),
          superclassType:      null,
          bodyDeclarations:    body,
          typeParameters:      optionalList(gen),
          interface:           true
        }, options);
    }

InterfaceBody
    = LWING decls:InterfaceBodyDeclaration* RWING
    { return skipNulls(decls); }

InterfaceBodyDeclaration
    = modifiers:Modifier* member:InterfaceMemberDecl
    { return mergeProps(member, { modifiers: modifiers }); }
    / SEMI
    { return null; }

InterfaceMemberDecl
    = InterfaceMethodOrFieldDecl
    / InterfaceGenericMethodDecl
    / VOID id:Identifier rest:VoidInterfaceMethodDeclaratorRest
    { return mergeProps(rest, { name: id }); }
    / InterfaceDeclaration
    / AnnotationTypeDeclaration
    / ClassDeclaration
    / EnumDeclaration

InterfaceMethodOrFieldDecl
    = type:Type id:Identifier rest:InterfaceMethodOrFieldRest
    {
      if (rest.node === 'FieldDeclaration') {
        rest.fragments[0].name = id;
        return mergeProps(rest, { type: type });
      } else {
        return mergeProps(rest, {
          returnType2:    type,
          name:           id,
          typeParameters: []
        });
      }
    }

InterfaceMethodOrFieldRest
    = rest:ConstantDeclaratorsRest SEMI
    { 
      return addLocation({
        node: 'FieldDeclaration',
        fragments: rest 
      }, options); 
    }
    / InterfaceMethodDeclaratorRest

InterfaceMethodDeclaratorRest
    = params:FormalParameters dims:Dim* throws:(THROWS ClassTypeList)? SEMI
    {
      return addLocation({
        node:            'MethodDeclaration',
        parameters:       params,
        thrownExceptionTypes: extractThrowsClassType(extractOptionalList(throws, 1)),
        extraDimensions2: [dims],
        body:             null,
        constructor:      false
      }, options);
    }

InterfaceGenericMethodDecl
    = params:TypeParameters type:(Type / VOID { return makePrimitive('void'); }) id:Identifier rest:InterfaceMethodDeclaratorRest
    {
      return mergeProps(rest, {
        returnType2:    type,
        name:           id,
        typeParameters: params
      });
    }

VoidInterfaceMethodDeclaratorRest
    = params:FormalParameters throws:(THROWS ClassTypeList)? SEMI
    {
      return addLocation({
        node:            'MethodDeclaration',
        parameters:       params,
        thrownExceptionTypes: extractThrowsClassType(extractOptionalList(throws, 1)),
        returnType2:      makePrimitive('void'),
        extraDimensions2: [],
        typeParameters:   [],
        body:             null,
        constructor:      false
      }, options);
    }

ConstantDeclaratorsRest
    = first:ConstantDeclaratorRest rest:(COMMA ConstantDeclarator)*
    { return buildList(first, rest, 1); }

ConstantDeclarator
    = id:Identifier rest:ConstantDeclaratorRest
    { return mergeProps(rest, { name: id }); }

ConstantDeclaratorRest
    = dims:Dim* EQU init:VariableInitializer
    {
      return addLocation({
        node:           'VariableDeclarationFragment',
        extraDimensions2: dims,
        initializer:     init
      }, options);
    }

//-------------------------------------------------------------------------
//  Enum Declaration
//-------------------------------------------------------------------------

EnumDeclaration
    = ENUM name:Identifier impl:(IMPLEMENTS ClassTypeList)? eb:EnumBody
    {
      return mergeProps(eb, addLocation({
        node:               'EnumDeclaration',
        name:                name,
        superInterfaceTypes: extractOptionalList(impl, 1)
      }, options));
    }

EnumBody
    = LWING consts:EnumConstants? COMMA? body:EnumBodyDeclarations? RWING
    {
      return {
        enumConstants:    optionalList(consts),
        bodyDeclarations: optionalList(body)
      };
    }

EnumConstants
    = first:EnumConstant rest:(COMMA EnumConstant)*
    { return buildList(first, rest, 1); }

EnumConstant
    = annot:Annotation* name:Identifier args:Arguments? cls:ClassBody?
    {
      return addLocation({
        node:                     'EnumConstantDeclaration',
        anonymousClassDeclaration: cls === null ? null : {
          node:             'AnonymousClassDeclaration',
          bodyDeclarations:  cls
        },
        arguments:                 optionalList(args),
        modifiers:                 annot,
        name:                      name
      }, options);
    }

EnumBodyDeclarations
    = SEMI decl:ClassBodyDeclaration*
    { return decl; }

//-------------------------------------------------------------------------
//  Variable Declarations
//-------------------------------------------------------------------------

LocalVariableDeclarationStatement
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)*
      type:Type decls:VariableDeclarators SEMI
    {
      return addLocation({
        node:        'VariableDeclarationStatement',
        fragments:    decls,
        modifiers:    modifiers,
        type:         type
      }, options);
    }

VariableDeclarators
    = first:VariableDeclarator rest:(COMMA VariableDeclarator)*
    { return buildList(first, rest, 1); }

VariableDeclarator
    = name:Identifier dims:Dim* init:(EQU VariableInitializer)?
    {
      return addLocation({
        node:           'VariableDeclarationFragment',
        name:            name,
        extraDimensions2: dims,
        initializer:     extractOptional(init, 1)
      }, options);
    }

//-------------------------------------------------------------------------
//  Receiver Parameter (JLS 8.4)
//-------------------------------------------------------------------------
ReceiverParameter
    = annot:Annotation? type:Type THIS
    {
      return {
        receiverQualifier: annot,
        receiverType: type
      }
    }

//-------------------------------------------------------------------------
//  Formal Parameters (JLS 8.4)
//-------------------------------------------------------------------------

FormalParameters
    = LPAR params:FormalParameterList? RPAR
    { return optionalList(params); }


FormalParameter
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)*
      type:Type decl:VariableDeclaratorId
    {
      return mergeProps(decl, {
        type:        type,
        modifiers:   modifiers,
        varargs:     false,
        varargsAnnotations: [], //TODO: this is unclear right now
        initializer: null
      });
    }

LastFormalParameter
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)*
      type:Type ELLIPSIS decl:VariableDeclaratorId
    {
      return mergeProps(decl, {
        type:        type,
        modifiers:   modifiers,
        varargs:     true,
        varargsAnnotations: [], //TODO: this is unclear right now
        initializer: null
      });
    }

FormalParameterList
    = first:FormalParameter rest:(COMMA FormalParameter)* last:(COMMA LastFormalParameter)?
    { return buildList(first, rest, 1).concat(extractOptionalList(last, 1)); }
    / last:LastFormalParameter
    { return [last]; }

VariableDeclaratorId
    = id:Identifier dims:Dim*
    {
      return addLocation({
        node:            'SingleVariableDeclaration',
        name:             id,
        extraDimensions2: dims
      }, options);
    }

//-------------------------------------------------------------------------
//  LambdaParameters
//-------------------------------------------------------------------------
LambdaParameters
    = LPAR params:FormalParameterList? RPAR
    { return optionalList(params); }

LambdaParameter
    = FormalParameter / Identifier

LastLambdaParameter
    = LastFormalParameter / Identifier

LambdaParameterList
    = first:LambdaParameter rest:(COMMA LambdaParameter)* last:(COMMA LastLambdaParameter)?
    { return buildList(first, rest, 1).concat(extractOptionalList(last, 1)); }
    / last:LastLambdaParameter
    { return [last]; }

//-------------------------------------------------------------------------
//  Statements
//-------------------------------------------------------------------------

Block
    = LWING statements:BlockStatements RWING
    {
      return addLocation({
        node:      'Block',
        statements: statements
      }, options);
    }

BlockStatements
    = BlockStatement*

BlockStatement
    = LocalVariableDeclarationStatement
    / modifiers:Modifier* decl:( ClassDeclaration / EnumDeclaration )
    {
      return addLocation({
        node:       'TypeDeclarationStatement',
        declaration: mergeProps(decl,  { modifiers: modifiers })
      }, options);
    }
    / Statement

Statement
    = Block
    / ASSERT expr:Expression message:(COLON Expression)? SEMI
    {
      return addLocation({
        node:      'AssertStatement',
        expression: expr,
        message:    extractOptional(message, 1)
      }, options);
    }
    / IF expr:ParExpression then:Statement alt:(ELSE Statement)?
    {
      return addLocation({
        node:         'IfStatement',
        elseStatement: extractOptional(alt, 1),
        thenStatement: then,
        expression:    expr.expression,
      }, options);
    }
    / FOR LPAR init:ForInit? SEMI expr:Expression? SEMI up:ForUpdate? RPAR body:Statement
    {
      return addLocation({
        node:        'ForStatement',
        initializers: optionalList(init),
        expression:   expr,
        updaters:     optionalList(up),
        body:         body
      }, options);
    }
    / FOR LPAR param:FormalParameter COLON expr:Expression RPAR statement:Statement
    {
      return addLocation({
        node:      'EnhancedForStatement',
        parameter:  param,
        expression: expr,
        body:       statement
      }, options);
    }
    / WHILE expr:ParExpression body:Statement
    {
      return addLocation({
        node:      'WhileStatement',
        expression: expr.expression,
        body:       body
      }, options);
    }
    / DO statement:Statement WHILE expr:ParExpression SEMI
    {
      return addLocation({
        node:      'DoStatement',
        expression: expr.expression,
        body:       statement
      }, options);
    }
    / TRY LPAR first:Resource rest:(SEMI Resource)* SEMI? RPAR
      body:Block cat:Catch* fin:Finally?
    {
      return mergeProps(
        makeCatchFinally(cat, fin), 
        addLocation(
          {
            node:        'TryStatement',
            body:         body,
            resources:    buildList(first, rest, 1)
          }, options
        )
      );
    }
    / TRY body:Block 
      rest:(cat:Catch+ fin:Finally? { return makeCatchFinally(cat, fin); }
            / fin:Finally { return makeCatchFinally([], fin); })
    {
      return mergeProps(
        rest, 
        addLocation({
            node:        'TryStatement',
            body:         body,
            resources:    []
          }, options
        )
      );
    }
    / SWITCH expr:ParExpression LWING cases:SwitchBlockStatementGroups RWING
    { return addLocation({ node: 'SwitchStatement', statements: cases, expression: expr.expression }, options); }
    / SYNCHRONIZED expr:ParExpression body:Block
    { return addLocation({ node: 'SynchronizedStatement', expression: expr.expression, body: body }, options); }
    / RETURN expr:Expression? SEMI
    { return addLocation({ node: 'ReturnStatement', expression: expr }, options); }
    / THROW expr:Expression SEMI
    { return addLocation({ node: 'ThrowStatement', expression: expr }, options); }
    / BREAK id:Identifier? SEMI
    { return addLocation({ node: 'BreakStatement', label: id }, options); }
    / CONTINUE id:Identifier? SEMI
    { return addLocation({ node: 'ContinueStatement', label: id }, options); }
    / SEMI
    { return addLocation({ node: 'EmptyStatement'}, options); }
    / statement:StatementExpression SEMI
    { return statement; }
    / id:Identifier COLON statement:Statement
    { return addLocation({ node: 'LabeledStatement', label: id, body: statement }, options); }

Resource
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* type:Type decl:VariableDeclaratorId EQU expr:Expression
    {
      var fragment = mergeProps(decl, { initializer: expr });
      fragment.node = 'VariableDeclarationFragment';
      return addLocation({
        node:     'VariableDeclarationExpression',
        modifiers: modifiers,
        type:      type,
        fragments: [fragment]
      }, options);
    }

Catch
    = CATCH LPAR modifiers:(FINAL { return makeModifier('final'); } / Annotation)*
      first:Type rest:(OR Type)* decl:VariableDeclaratorId RPAR body:Block
    {
      return {
        node:       'CatchClause',
        body:        body,
        exception:   mergeProps(decl, {
          modifiers:   modifiers,
          initializer: null,
          varargs:     false,
          type:        rest.length ? {
            node: 'UnionType',
            types: buildList(first, rest, 1)
            } : first
        })
      };
    }

Finally
    = FINALLY block:Block
    { return block; }

SwitchBlockStatementGroups
    = blocks:SwitchBlockStatementGroup*
    { return [].concat.apply([], blocks); }

SwitchBlockStatementGroup
    = expr:SwitchLabel blocks:BlockStatements
    { return [addLocation({ node: 'SwitchCase', expression: expr }, options)].concat(blocks); }

SwitchLabel
    = CASE expr:ConstantExpression COLON
    { return expr; }
    / CASE expr:EnumConstantName COLON
    { return expr; }
    / DEFAULT COLON
    { return null; }

ForInit
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* type:Type decls:VariableDeclarators
    {
      return [addLocation({
        node:     'VariableDeclarationExpression',
        modifiers: modifiers,
        fragments: decls,
        type:      type
      }, options)];
    }
    / first:StatementExpression rest:(COMMA StatementExpression)*
    { return extractExpressions(buildList(first, rest, 1)); }

ForUpdate
    = first:StatementExpression rest:(COMMA StatementExpression)*
    { return extractExpressions(buildList(first, rest, 1)); }

EnumConstantName
    = Identifier

//-------------------------------------------------------------------------
//  Expressions
//-------------------------------------------------------------------------

StatementExpression
    = expr:Expression
    {
      switch(expr.node) {
        case 'SuperConstructorInvocation':
        case 'ConstructorInvocation':
          return expr;
        default:
          return addLocation({
            node:      'ExpressionStatement',
            expression: expr
          }, options);
      }
    }

    // This is more generous than definition in section 14.8, which allows only
    // specific forms of Expression.


ConstantExpression
    = Expression

// 15.2 of JLS 15
Expression
    = AssignmentExpression

// 15.26 of JLS 15
// UnaryExpressionNotPlusMinus is still more generous than LeftHandSide, which was restricted to:
// LeftHandSide:
//   ExpressionName
//   FieldAccess
//   ArrayAccess
AssignmentExpression
    = left:UnaryExpressionNotPlusMinus op:AssignmentOperator right:Expression
    {
      return addLocation({
        node:         'Assignment',
        operator:      op[0] /* remove ending spaces */,
        leftHandSide:  left,
        rightHandSide: right
      }, options);
    }
    / ConditionalExpression

    // This definition is part of the modification in JLS Chapter 18
    // to minimize look ahead. In JLS Chapter 15.27, Expression is defined
    // as AssignmentExpression, which is effectively defined as
    // (LeftHandSide AssignmentOperator)* ConditionalExpression.
    // The above is obtained by allowing ANY ConditionalExpression
    // as LeftHandSide, which results in accepting statements like 5 = a.

AssignmentOperator
    = EQU
    / PLUSEQU
    / MINUSEQU
    / STAREQU
    / DIVEQU
    / ANDEQU
    / OREQU
    / HATEQU
    / MODEQU
    / SLEQU
    / SREQU
    / BSREQU

ConditionalExpression
    = expr:ConditionalOrExpression QUERY then:Expression COLON alt:ConditionalExpression
    {
      return addLocation({
        node:          'ConditionalExpression',
        expression:     expr,
        thenExpression: then,
        elseExpression: alt
      }, options);
    }
    / ConditionalOrExpression

ConditionalOrExpression
    = first:ConditionalAndExpression rest:(OROR ConditionalAndExpression)*
    { return buildInfixExpr(first, rest, options); }

ConditionalAndExpression
    = first:InclusiveOrExpression rest:(ANDAND InclusiveOrExpression)*
    { return buildInfixExpr(first, rest, options); }

InclusiveOrExpression
    = first:ExclusiveOrExpression rest:(OR ExclusiveOrExpression)*
    { return buildInfixExpr(first, rest, options); }

ExclusiveOrExpression
    = first:AndExpression rest:(HAT AndExpression)*
    { return buildInfixExpr(first, rest, options); }

AndExpression
    = first:EqualityExpression rest:(AND EqualityExpression)*
    { return buildInfixExpr(first, rest, options); }

EqualityExpression
    = first:RelationalExpression rest:((EQUAL /  NOTEQUAL) RelationalExpression)*
    { return buildInfixExpr(first, rest, options); }

RelationalExpression
    = first:ShiftExpression rest:((LE / GE / LT / GT) ShiftExpression / INSTANCEOF ReferenceType )*
    {
      return buildTree(first, rest, function(result, element) {
        return addLocation(element[0][0] === 'instanceof' ? {
          node:        'InstanceofExpression',
          leftOperand:  result,
          rightOperand: element[1]
        } : {
          node:        'InfixExpression',
          operator:     element[0][0], // remove ending Spacing
          leftOperand:  result,
          rightOperand: element[1]
        }, options);
      });
    }

ShiftExpression
    = first:AdditiveExpression rest:((SL / SR / BSR) AdditiveExpression)*
    { return buildInfixExpr(first, rest, options); }

AdditiveExpression
    = first:MultiplicativeExpression rest:((PLUS / MINUS) MultiplicativeExpression)*
    { return buildInfixExpr(first, rest, options); }

MultiplicativeExpression
    = first:UnaryExpression rest:((STAR / DIV / MOD) UnaryExpression)*
    { return buildInfixExpr(first, rest, options); }

UnaryExpression
    = operator:PrefixOp operand:UnaryExpression
    {
      return addLocation(operand.node === 'NumberLiteral' && operator === '-' &&
        (operand.token === '9223372036854775808L' ||
         operand.token === '9223372036854775808l' ||
         operand.token === '2147483648')
        ? { node: 'NumberLiteral', token: text() }
        : {
          node:    'PrefixExpression',
          operator: operator,
          operand:  operand
        }, options);
    }
    / UnaryExpressionNotPlusMinus

UnaryExpressionNotPlusMinus
    = expr:CastExpression
    {
      return addLocation({
        node:      'CastExpression',
        type:       expr[1],
        expression: expr[3]
      }, options);
    }
    / arg:Primary sel:Selector sels:Selector* operator:PostfixOp+
    {
      return addLocation(operator.length > 1 ? TODO(/* JLS7? */) : {
        node:    'PostfixExpression',
        operator: operator[0],
        operand:  buildSelectorTree(arg, sel, sels)
      }, options);
    }
    / arg:Primary sel:Selector sels:Selector*
    { return buildSelectorTree(arg, sel, sels); }
    / arg:Primary operator:PostfixOp+
    {
      return addLocation(operator.length > 1 ? TODO(/* JLS7? */) : {
        node:    'PostfixExpression',
        operator: operator[0],
        operand:  arg
      }, options);
    }
    / Primary

CastExpression
    = LPAR PrimitiveType RPAR UnaryExpression
    / LPAR ReferenceType RPAR UnaryExpressionNotPlusMinus

// 15.8 of JLS 15
Primary
    = ParExpression
    / args:NonWildcardTypeArguments
      ret:(ExplicitGenericInvocationSuffix / THIS args_r:Arguments
      { return { node: 'ConstructorInvocation', arguments: args_r, typeArguments: [] }; })
    {
      if (ret.typeArguments.length) return TODO(/* Ugly ! */);
      ret.typeArguments = args;
      return ret;
    }
    / THIS args:Arguments?
    {
      return addLocation(args === null ? {
        node:     'ThisExpression',
        qualifier: null
      } : {
        node:         'ConstructorInvocation',
        arguments:     args,
        typeArguments: []
      }, options);
    }
    / SUPER suffix:SuperSuffix
    {
      return addLocation(
        suffix.node === 'SuperConstructorInvocation'
                    ? suffix
                    : mergeProps(suffix, { qualifier: null })
        , options
      );
    }
    / Literal
    / NEW creator:Creator
    { return creator; }
    / QualifiedIdentifierSuffix
    / QualifiedIdentifier
    / type:BasicType dims:Dim* DOT CLASS
    {
      return addLocation({
        node: 'TypeLiteral',
        type:  buildArrayType(type, dims)
      }, options);
    }
    / VOID DOT CLASS
    {
      return addLocation({
        node: 'TypeLiteral',
        type:  makePrimitive('void')
      }, options);
    }

QualifiedIdentifierSuffix
    = qual:QualifiedIdentifier dims:Dim+ DOT CLASS
    {
      return addLocation({
        node: 'TypeLiteral',
        type:  buildArrayType(buildTypeName(qual, null, []), dims)
      }, options);
    }
    / qual:QualifiedIdentifier LBRK expr:Expression RBRK
    { return addLocation({ node: 'ArrayAccess',  array: qual, index: expr }, options); }
    / qual:QualifiedIdentifier args:Arguments
    {
      return addLocation(mergeProps(popQualified(qual), {
        node:         'MethodInvocation',
        arguments:     args,
        typeArguments: []
      }), options);
    }
    / qual:QualifiedIdentifier DOT CLASS
    { return addLocation({ node: 'TypeLiteral', type: buildTypeName(qual, null, []) }, options); }
    / qual:QualifiedIdentifier DOT ret:ExplicitGenericInvocation
    {
      if (ret.expression) return TODO(/* Ugly ! */);
      ret.expression = qual;
      return ret;
    }
    / qual:QualifiedIdentifier DOT THIS
    { return addLocation({ node: 'ThisExpression', qualifier: qual }, options); }
    / qual:QualifiedIdentifier DOT SUPER args:Arguments
    {
      return addLocation({
        node:         'SuperConstructorInvocation',
        arguments:     args,
        expression:    qual,
        typeArguments: []
      }, options);
    }
    / qual:QualifiedIdentifier DOT NEW args:NonWildcardTypeArguments? rest:InnerCreator
    { return mergeProps(rest, { expression: qual, typeArguments: optionalList(args) }); }

    // This definition comes from Chapter 18 in JLS Third edition.
    // The definition in JLS SE7 seems incorrect as it would mean
    // nesting of brackets.

ExplicitGenericInvocation
    = args:NonWildcardTypeArguments ret:ExplicitGenericInvocationSuffix
    {
      if (ret.typeArguments.length) return TODO(/* Ugly ! */);
      ret.typeArguments = args;
      return ret;
    }

NonWildcardTypeArguments
    = LPOINT first:ReferenceType rest:(COMMA ReferenceType)* RPOINT
    { return buildList(first, rest, 1); }

TypeArgumentsOrDiamond
    = LPOINT RPOINT
    { return []; }
    / TypeArguments

NonWildcardTypeArgumentsOrDiamond
    = LPOINT RPOINT
    / NonWildcardTypeArguments

ExplicitGenericInvocationSuffix
    = SUPER suffix:SuperSuffix
    { return suffix; }
    / id:Identifier args:Arguments
    { return addLocation({ node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] }, options); }

PrefixOp
    = op:(
      INC
    / DEC
    / BANG
    / TILDA
    / PLUS
    / MINUS
    ) { return op[0]; /* remove ending spaces */ }

PostfixOp
    = op:(
      INC
    / DEC
    ) { return op[0]; /* remove ending spaces */ }

MethodInvocationSelector
    = DOT id:Identifier args:Arguments
    { return addLocation({ node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] }, options); }

FieldSelector
    = DOT id:Identifier
    { return addLocation({ node: 'FieldAccess', name: id }, options); }

ArraySelector
    = expr:DimExpr
    { return addLocation({ node: 'ArrayAccess', index: expr }, options); }

Selector
    = MethodInvocationSelector
    / FieldSelector
    / DOT ret:ExplicitGenericInvocation
    { return ret; }
    / DOT THIS
    { return TODO(/* Any sample ? */); }
    / DOT SUPER suffix:SuperSuffix
    { return suffix; }
    / DOT NEW args:NonWildcardTypeArguments? ret:InnerCreator
    { return mergeProps(ret, { typeArguments: optionalList(args) }); }
    / ArraySelector

SuperSuffix
    = args:Arguments
    {
      return addLocation({
        node:         'SuperConstructorInvocation',
        arguments:     args,
        expression:    null,
        typeArguments: []
      }, options);
    }
    / DOT gen:NonWildcardTypeArguments? id:Identifier args:Arguments?
    {
      return addLocation(args === null ? {
        node: 'SuperFieldAccess',
        name:  id
      } : {
        node:         'SuperMethodInvocation',
        typeArguments: optionalList(gen),
        name:          id,
        arguments:     args
      }, options);
    }

    // The definition of SuperSuffix in JLS Chapter 18 is incorrect:
    // it does not allow NonWildcardTypeArguments. See JLS 15.12.

BasicType
    = annot:Annotation*
      type:(
        "byte"
      / "short"
      / "char"
      / "int"
      / "long"
      / "float"
      / "double"
      / "boolean"
      ) !LetterOrDigit Spacing
    { return makePrimitive(type, annot); }

PrimitiveType
    = BasicType

Arguments
    = LPAR args:(first:Expression rest:(COMMA Expression)* { return buildList(first, rest, 1); })? RPAR
    { return optionalList(args); }

Creator
    = type:(BasicType / CreatedName) rest:ArrayCreatorRest
    {
      return addLocation({
        node:       'ArrayCreation',
        type:        buildArrayType(type, rest.extraDims),
        initializer: rest.init,
        dimensions:  rest.dimms
      }, options);
    }
    / args:NonWildcardTypeArguments? type:CreatedName rest:ClassCreatorRest
    {
      return mergeProps(rest, addLocation({
        node:          'ClassInstanceCreation',
        type:           type,
        typeArguments:  optionalList(args),
        expression:     null
      }, options));
    }

    // The definition of Creator in JLS Chapter 18 is incorrect:
    // it does not allow BasicType for array creator. See JLS 15.10.

CreatedName
    = qual:QualifiedIdentifier args:TypeArgumentsOrDiamond? rest:( DOT Identifier TypeArgumentsOrDiamond? )*
    { return buildTypeName(qual, args, rest); }

InnerCreator
    = id:Identifier args:NonWildcardTypeArgumentsOrDiamond? rest:ClassCreatorRest
    {
      return addLocation(mergeProps(rest, {
        node: 'ClassInstanceCreation',
        type:  buildTypeName(id, args, [])
      }), options);
    }

ClassCreatorRest
    = args:Arguments body:ClassBody?
    {
      return {
        arguments:                 args,
        anonymousClassDeclaration: body === null ? null : {
          node:            'AnonymousClassDeclaration',
          bodyDeclarations: body
        }
      };
    }

ArrayCreatorRest
    = dims:Dim+ init:ArrayInitializer
    { return { extraDims:dims, init:init, dimms: [] }; }
    / dimexpr:DimExpr+ dims:Dim*
    { return { extraDims:dimexpr.concat(dims), init:null, dimms: dimexpr }; }
    / dim:Dim
    { return { extraDims:[dim], init:null, dimms: [] }; }

    // This version comes from JLS Chapter 18.
    // It is more generous than JLS 15.10. According to that definition,
    // BasicType must be followed by at least one DimExpr or by ArrayInitializer.
    // Besides, the last alternative does not correspond to JLS 15.10,
    // and may be an error.

ArrayInitializer
    = LWING
      init:(
        first:VariableInitializer rest:(COMMA VariableInitializer)*
        { return buildList(first, rest, 1); }
      )?
      COMMA?  RWING
    { return addLocation({ node: 'ArrayInitializer', expressions: optionalList(init) }, options); }

VariableInitializer
    = ArrayInitializer
    / Expression

// TODO: is there a more elegant way to do this? 
//       With only 1 level of nesting, we get seemingly an infinite loop on int z = ((((x + ((x + 1) + 1))) + 1));
ParExpression 
    = LPAR LPAR LPAR expr:Expression RPAR RPAR RPAR
    { return nestParenthesizedExpressions(3, expr , options); }
    / LPAR LPAR expr:Expression RPAR RPAR
    { return nestParenthesizedExpressions(2, expr , options); }
    / LPAR expr:Expression RPAR
    { return nestParenthesizedExpressions(1, expr , options); }

QualifiedIdentifier
    = first:Identifier rest:(DOT Identifier)*
    { return buildQualified(first, rest, 1, options); }

Dim
    = LBRK RBRK

DimExpr
    = LBRK exp:Expression RBRK
    { return exp; }

//-------------------------------------------------------------------------
//  Types and Modifiers
//-------------------------------------------------------------------------

Type
    = type:(BasicType / ClassType) dims:Dim*
      { return buildArrayType(type, dims); }

ReferenceType
    = bas:BasicType dims:Dim+
    { return buildArrayType(bas, dims); }
    / cls:ClassType dims:Dim*
    { return buildArrayType(cls, dims); }

ClassType
    = annot:Annotation* qual:QualifiedIdentifier args:TypeArguments? rest:(DOT Identifier TypeArguments?)*
    { return buildTypeName(qual, args, rest, annot); }

ClassTypeList
    = first:ClassType rest:(COMMA ClassType)*
    { return buildList(first, rest, 1); }

TypeArguments
    = LPOINT first:TypeArgument rest:(COMMA TypeArgument)* RPOINT
    { return buildList(first, rest, 1); }

TypeArgument
    = ReferenceType
    / QUERY rest:((EXTENDS { return true; } / SUPER { return false; }) ReferenceType)?
    {
      return {
        node:      'WildcardType',
        upperBound: extractOptional(rest, 0, true),
        bound:      extractOptional(rest, 1)
      };
    }

TypeParameters
    = LPOINT first:TypeParameter rest:(COMMA TypeParameter)* RPOINT
    { return buildList(first, rest, 1); }

TypeParameter
    = id:Identifier bounds:(EXTENDS Bound)?
    {
      return {
        node:      'TypeParameter',
        name:       id,
        typeBounds: extractOptionalList(bounds, 1)
      }
    }

Bound
    = first:ClassType rest:(AND ClassType)*
    { return buildList(first, rest, 1); }

Modifier
    = Annotation
    / keyword:(
        "public"
      / "protected"
      / "private"
      / "static"
      / "abstract"
      / "final"
      / "native"
      / "synchronized"
      / "transient"
      / "volatile"
      / "strictfp"
      ) !LetterOrDigit Spacing
    { return makeModifier(keyword); }

    // This common definition of Modifier is part of the modification
    // in JLS Chapter 18 to minimize look ahead. The main body of JLS has
    // different lists of modifiers for different language elements.

//-------------------------------------------------------------------------
//  Annotations
//-------------------------------------------------------------------------

AnnotationTypeDeclaration
    = AT INTERFACE id:Identifier body:AnnotationTypeBody
    {
      return {
        node:            'AnnotationTypeDeclaration',
        name:             id,
        bodyDeclarations: body
      };
    }

AnnotationTypeBody
    = LWING decl:AnnotationTypeElementDeclaration* RWING
    { return skipNulls(decl); }

AnnotationTypeElementDeclaration
    = modifiers:Modifier* rest:AnnotationTypeElementRest
    { return mergeProps(rest, { modifiers: modifiers }); }
    / SEMI
    { return null; }

AnnotationTypeElementRest
    = type:Type rest:AnnotationMethodOrConstantRest SEMI
    { return mergeProps(rest, { type: type }); }
    / ClassDeclaration
    / EnumDeclaration
    / InterfaceDeclaration
    / AnnotationTypeDeclaration

AnnotationMethodOrConstantRest
    = AnnotationMethodRest
    / AnnotationConstantRest

AnnotationMethodRest
    = id:Identifier LPAR RPAR def:DefaultValue?
    {
      return {
        node:   'AnnotationTypeMemberDeclaration',
        name:    id,
        default: def
      };
    }

AnnotationConstantRest
    = fragments:VariableDeclarators
    { return addLocation({ node: 'FieldDeclaration', fragments: fragments }, options); }

DefaultValue
    = DEFAULT val:ElementValue
    { return val; }

Annotation
    = NormalAnnotation
    / SingleElementAnnotation
    / MarkerAnnotation

NormalAnnotation
    = AT id:QualifiedIdentifier LPAR pairs:ElementValuePairs? RPAR
    {
      return {
        node:    'NormalAnnotation',
        typeName: id,
        values:   optionalList(pairs)
      };
    }

SingleElementAnnotation
    = AT id:QualifiedIdentifier LPAR value:ElementValue RPAR
    {
      return {
        node:    'SingleMemberAnnotation',
        typeName: id,
        value:    value
      };
    }

MarkerAnnotation
    = AT id:QualifiedIdentifier
    { return { node: 'MarkerAnnotation', typeName: id }; }

ElementValuePairs
    = first:ElementValuePair rest:(COMMA ElementValuePair)*
    { return buildList(first, rest, 1); }

ElementValuePair
    = name:Identifier EQU value:ElementValue
    {
      return {
        node: 'MemberValuePair',
        name:  name,
        value: value
      };
    }

ElementValue
    = ConditionalExpression
    / Annotation
    / ElementValueArrayInitializer

ElementValueArrayInitializer
    = LWING values:ElementValues? COMMA? RWING
    { return addLocation({ node: 'ArrayInitializer', expressions: optionalList(values)}, options); }

ElementValues
    = first:ElementValue rest:(COMMA ElementValue)*
    { return buildList(first, rest, 1); }


//=========================================================================
//  Lexical Structure
//=========================================================================
//-------------------------------------------------------------------------
//  JLS 3.1-3  Unicode
//-------------------------------------------------------------------------
//  The Unicode escapes in Java source are converted
//  to Java characters by a preprocessor prior to parsing.
//  This is not emulated here; the Unicode escapes are only allowed
//  in string and character literals. They are treated as error in other
//  structures (except comments). The warning in JLS 3.10.5 against using
//  Unicode escapes for line terminators and quotes in string and character
//  literals does not apply here.
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//  JLS 3.6-7  Spacing
//-------------------------------------------------------------------------

Spacing
    = ( [ \t\r\n\u000C]+          // WhiteSpace
      / "/*" (!"*/" _)* "*/"      // TraditionalComment
      / "//" (![\r\n] _)* [\r\n]  // EndOfLineComment
      )* ;

//-------------------------------------------------------------------------
//  JLS 3.8  Identifiers
//-------------------------------------------------------------------------

Identifier
    = !Keyword first:Letter rest:$LetterOrDigit* Spacing
    { return addLocation({ identifier: first + rest, node: 'SimpleName', var: (first + rest) === 'var'  }, options); }

Letter = [a-z] / [A-Z] / [_$] ;

LetterOrDigit = [a-z] / [A-Z] / [0-9] / [_$] ;

    // These are traditional definitions of letters and digits.
    // JLS defines letters and digits as Unicode characters recognized
    // as such by special Java procedures, which is difficult
    // to express in terms of Parsing Expressions.

//-------------------------------------------------------------------------
//  JLS 3.9  Keywords
//  More precisely: reserved words. According to JLS, "true", "false",
//  and "null" are technically not keywords - but still must not appear
//  as identifiers. Keywords "const" and "goto" are not used; JLS explains
//  the reason.
//-------------------------------------------------------------------------

Keyword

    = ( "abstract"
      / "assert"
      / "boolean"
      / "break"
      / "byte"
      / "case"
      / "catch"
      / "char"
      / "class"
      / "const"
      / "continue"
      / "default"
      / "double"
      / "do"
      / "else"
      / "enum"
      / "extends"
      / "false"
      / "finally"
      / "final"
      / "float"
      / "for"
      / "goto"
      / "if"
      / "implements"
      / "import"
      / "interface"
      / "int"
      / "instanceof"
      / "long"
      / "native"
      / "new"
      / "null"
      / "package"
      / "private"
      / "protected"
      / "public"
      / "return"
      / "short"
      / "static"
      / "strictfp"
      / "super"
      / "switch"
      / "synchronized"
      / "this"
      / "throws"
      / "throw"
      / "transient"
      / "true"
      / "try"
      / "void"
      / "volatile"
      / "while"
      ) !LetterOrDigit

ASSERT       = "assert"       !LetterOrDigit Spacing
BREAK        = "break"        !LetterOrDigit Spacing
CASE         = "case"         !LetterOrDigit Spacing
CATCH        = "catch"        !LetterOrDigit Spacing
CLASS        = "class"        !LetterOrDigit Spacing
CONTINUE     = "continue"     !LetterOrDigit Spacing
DEFAULT      = "default"      !LetterOrDigit Spacing
DO           = "do"           !LetterOrDigit Spacing
ELSE         = "else"         !LetterOrDigit Spacing
ENUM         = "enum"         !LetterOrDigit Spacing
EXTENDS      = "extends"      !LetterOrDigit Spacing
FINALLY      = "finally"      !LetterOrDigit Spacing
FINAL        = "final"        !LetterOrDigit Spacing
FOR          = "for"          !LetterOrDigit Spacing
IF           = "if"           !LetterOrDigit Spacing
IMPLEMENTS   = "implements"   !LetterOrDigit Spacing
IMPORT       = "import"       !LetterOrDigit Spacing
INTERFACE    = "interface"    !LetterOrDigit Spacing
INSTANCEOF   = "instanceof"   !LetterOrDigit Spacing
NEW          = "new"          !LetterOrDigit Spacing
PACKAGE      = "package"      !LetterOrDigit Spacing
RETURN       = "return"       !LetterOrDigit Spacing
STATIC       = "static"       !LetterOrDigit Spacing
SUPER        = "super"        !LetterOrDigit Spacing
SWITCH       = "switch"       !LetterOrDigit Spacing
SYNCHRONIZED = "synchronized" !LetterOrDigit Spacing
THIS         = "this"         !LetterOrDigit Spacing
THROWS       = "throws"       !LetterOrDigit Spacing
THROW        = "throw"        !LetterOrDigit Spacing
TRY          = "try"          !LetterOrDigit Spacing
VOID         = "void"         !LetterOrDigit Spacing
WHILE        = "while"        !LetterOrDigit Spacing

//-------------------------------------------------------------------------
//  JLS 3.10  Literals
//-------------------------------------------------------------------------

Literal
    = literal:( FloatLiteral
      / IntegerLiteral          // May be a prefix of FloatLiteral
      / CharLiteral
      / StringLiteral
      / "true"  !LetterOrDigit
      { return addLocation({ node: 'BooleanLiteral', booleanValue: true}, options); }
      / "false" !LetterOrDigit
      { return addLocation({ node: 'BooleanLiteral', booleanValue: false}, options); }
      / "null"  !LetterOrDigit
      { return addLocation({ node: 'NullLiteral'}, options); }
      ) Spacing
    { return literal; }

IntegerLiteral
    = ( HexNumeral
      / BinaryNumeral
      / OctalNumeral            // May be a prefix of HexNumeral or BinaryNumeral
      / DecimalNumeral          // May be a prefix of OctalNumeral
      ) [lL]?
    { return addLocation({ node: 'NumberLiteral', token: text()}, options); }

DecimalNumeral
    = "0"
    / [1-9]([_]*[0-9])*

HexNumeral
    = ("0x" / "0X") HexDigits

BinaryNumeral
    = ("0b" / "0B") [01]([_]*[01])*

OctalNumeral
    = "0" ([_]*[0-7])+

FloatLiteral
    = ( HexFloat
    / DecimalFloat )
    { return addLocation({ node: 'NumberLiteral', token: text()}, options); }

DecimalFloat
    = Digits "." Digits?  Exponent? [fFdD]?
    / "." Digits Exponent? [fFdD]?
    / Digits Exponent [fFdD]?
    / Digits Exponent? [fFdD]

Exponent
    = [eE] [+\-]? Digits

HexFloat
    = HexSignificand BinaryExponent [fFdD]?

HexSignificand
    = ("0x" / "0X") HexDigits? "." HexDigits
    / HexNumeral "."?                           // May be a prefix of above

BinaryExponent
    = [pP] [+\-]? Digits

Digits
    = [0-9]([_]*[0-9])*

HexDigits
    = HexDigit ([_]*HexDigit)*

HexDigit
    = [a-f] / [A-F] / [0-9]

CharLiteral
    = "'" (Escape / !['\\\n\r] _) "'"                      // this " keeps the editor happy
    { return addLocation({ node: 'CharacterLiteral', escapedValue: text()}, options); }

StringLiteral
    = "\"" (Escape / !["\\\n\r] _)* "\""                   // this " keeps the editor happy
    { return addLocation({ node: 'StringLiteral', escapedValue: text()}, options); }

Escape
    = "\\" ([btnfr"'\\] / OctalEscape / UnicodeEscape)     // this " keeps the editor happy

OctalEscape
    = [0-3][0-7][0-7]
    / [0-7][0-7]
    / [0-7]

UnicodeEscape
    = "u"+ HexDigit HexDigit HexDigit HexDigit

//-------------------------------------------------------------------------
//  JLS 3.11-12  Separators, Operators
//-------------------------------------------------------------------------

AT              =   "@"       Spacing
AND             =   "&"![=&]  Spacing
ANDAND          =   "&&"      Spacing
ANDEQU          =   "&="      Spacing
BANG            =   "!" !"="  Spacing
BSR             =   ">>>"!"=" Spacing
BSREQU          =   ">>>="    Spacing
COLON           =   ":"       Spacing
COMMA           =   ","       Spacing
DEC             =   "--"      Spacing
DIV             =   "/" !"="  Spacing
DIVEQU          =   "/="      Spacing
DOT             =   "."       Spacing
ELLIPSIS        =   "..."     Spacing
EQU             =   "=" !"="  Spacing
EQUAL           =   "=="      Spacing
GE              =   ">="      Spacing
GT              =   ">"![=>]  Spacing
HAT             =   "^"!"="   Spacing
HATEQU          =   "^="      Spacing
INC             =   "++"      Spacing
LBRK            =   "["       Spacing
LE              =   "<="      Spacing
LPAR            =   "("       Spacing
LPOINT          =   "<"       Spacing
LT              =   "<"![=<]  Spacing
LWING           =   "{"       Spacing
MINUS           =   "-"![=\-] Spacing
MINUSEQU        =   "-="      Spacing
MOD             =   "%"!"="   Spacing
MODEQU          =   "%="      Spacing
NOTEQUAL        =   "!="      Spacing
OR              =   "|"![=|]  Spacing
OREQU           =   "|="      Spacing
OROR            =   "||"      Spacing
PLUS            =   "+"![=+]  Spacing
PLUSEQU         =   "+="      Spacing
QUERY           =   "?"       Spacing
RBRK            =   "]"       Spacing
RPAR            =   ")"       Spacing
RPOINT          =   ">"       Spacing
RWING           =   "}"       Spacing
SEMI            =   ";"       Spacing
SL              =   "<<"!"="  Spacing
SLEQU           =   "<<="     Spacing
SR              =   ">>"![=>] Spacing
SREQU           =   ">>="     Spacing
STAR            =   "*"!"="   Spacing
STAREQU         =   "*="      Spacing
TILDA           =   "~"       Spacing
ARROW           =   "->"      Spacing 

EOT = !_

/* http://mousepeg.sourceforge.net/Manual.pdf */

_               =   .