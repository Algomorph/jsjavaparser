# NOTE: use from root project directory!
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/InterfaceTests/EmptyTests/EmptyInterface.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/InterfaceTests/EmptyTests/EmptyInterfaceExtendsMultiple.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/InterfaceTests/EmptyTests/EmptyInterfaceExtendsSingle.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/InterfaceTests/EmptyTests/EmptyInterfaceWithGenericExtendsMultiple.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/InterfaceTests/EmptyTests/EmptyInterfaceWithModifiersWithAnnotation.java