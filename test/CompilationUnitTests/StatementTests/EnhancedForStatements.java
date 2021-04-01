public class Test {
    public static void main(String[] args) {
        for (float i : l) hello();
        for (final java.lang.String i : new String[]{"one","two"}) { hello(); }
        for (final @ann List<String> i : x) { hello(); }
    }
}