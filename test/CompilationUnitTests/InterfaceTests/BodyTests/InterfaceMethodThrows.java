interface Test {
    void hello();
    int world(int a)  throws A;
    void world(int a) throws A, B.C;
}