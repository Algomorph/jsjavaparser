@Target(ElementType.METHOD)
public @interface ReallyComplexAnnotation {
    protected @interface InnerAnnotation {
        public SimpleAnnotation value() default @SimpleAnnotation(a="...");
    }
}