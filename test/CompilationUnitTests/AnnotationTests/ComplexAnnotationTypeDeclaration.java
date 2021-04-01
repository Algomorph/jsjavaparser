@Target(ElementType.METHOD)
public @interface ReallyComplexAnnotation {
    public SimpleAnnotation value() default @SimpleAnnotation(a="...");
}