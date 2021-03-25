class Test {
  public static void main(String[] args) {
    this.world(42);
    int a = this.world;
    this.<String>world(42);
    super(42);
    x = super.hello;
    super.hello.world(42);
    this.hello.new Runnable(){ @override void run(){} };
    Outer.this.hello.new <String>Runnable(){ @override void run(){} };
    super.hello[42]++;
    this.hello[42]++;
    Outer.this.hello[42]++;
  }
}