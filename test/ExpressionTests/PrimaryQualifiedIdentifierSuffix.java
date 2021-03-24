class Test {
    public static void main(String[] args) {
        c = Hello.World[].class;
        c = Hello.World[][].class;
        c = Hello[][][][].class;
        i = world[42];
        i = world[i++];
        i = hello.world[--i];
        synchronized(Test.class) {}
        synchronized(Hello.World.class){hello.world[--i]++;}
        hello.<String>world();
        hello.world.<String, Object>world(42);
        z = hello.world.<String, Object>world(42).x.field;
        hello.world.<String, Object>super();
        hello.world.<String, Object>super(42);
        x = super.field;
        x = super.field++;
        a = hello.world.super.field++;
        a = hello.world.super.field;
        b = super.field.subfield;
        x = this;
        y = this.a;
        this.b();
        this.a.b(42);
        hello.super();
        hello.world.super(42);
        hello.new World(){};
        hello.world.new <String>World(42){};
        hello.world.new <String>World<Object>(42){};
    }
}