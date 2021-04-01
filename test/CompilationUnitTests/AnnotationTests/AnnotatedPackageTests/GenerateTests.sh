# NOTE: use from root project directory!
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/ArrayValuedEmptyAnnotation.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/ArrayValuedSingleElementAnnotation.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/PackageWithMarkerAnnotation.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/PackageWithNormalAnnotations.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/PackageWithNormalEmptyAnnotations.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/PackageWithSingleElementAnnotations.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/SingleElementAnnotationThatContainsANormalAnnotation.java &&
python3 ./tools/generate_unit_test.py test/CompilationUnitTests/AnnotationTests/AnnotatedPackageTests/SingleElementArrayValuedSingleElementAnnotation.java