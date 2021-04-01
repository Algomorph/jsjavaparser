# NOTE: use from root project directory!
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EmptyEnum.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EmptyEnumImplements.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EmptyEnumWithBodyWithMembers.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EnumConstantsWithAnnotationWithArguments.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EnumConstantsWithArguments.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/EnumTests/EnumConstantsWithClassBodies.java