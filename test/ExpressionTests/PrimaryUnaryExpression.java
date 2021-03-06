class Test {
    public static void main(String[] args) {
        new Object(); // Primary
        new java.lang.String("hello").hashCode("hello"); // Primary Selector
        new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().equals(42); // Primary Selector+
        new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().some(42).equals(42); // Primary Selector+
        Hello.World++; // Primary PostfixOp
        Hello().World++; // Primary Selector PostfixOp
        new java.lang.String("hello").hashCode("hello").v++; // Primary Selector+ PostfixOp
        new java.lang.String("hello").hashCode("hello").h.v++; // Primary Selector+ PostfixOp
        new String("hello").hashCode("hello").h.v().hello.world++;
        ++new String("hello").hashCode("hello").h.v().hello.world;
    }
}