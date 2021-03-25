class Test {
  public static void main(String[] args) {
    c = new byte[]{42};
    c = new short[];
    c = new int[5][];
    c = new long[5][42][];
    c = new float[5][42][x];
    c = new double[5][42][x][];
    boolean[] c = new boolean[42];
    c = new Hello[] {new Hello(), new Hello(42), new Hello(world)};
    c = new Hello.World[][] {
      {new Hello(), new Hello(42), new Hello(){ @override world(){} }},
      {new Hello<String>(){}, new Hello<String>(42), new Hello(world)}
    };
    x();
    x(42);
    x(y, 42);
  }
}