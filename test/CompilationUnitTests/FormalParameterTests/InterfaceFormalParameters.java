interface Test {
    void test();
    void test(int a);
    void test(@annotation int a, String b);
    void test(int[] a, @annotation String b[]);
    void test(final int a, final java.lang.String[][][] b[], float c);
    void test(int... f);
    void test(double n, final int[]... g);
    void World(double n, final List<int[]>... g);
}