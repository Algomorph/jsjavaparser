class Test {
    public static synchronized void main(String[] args) {
        synchronized(org.Test.class) {
            System.out.println("hello");
        }

        synchronized(Test.class) {
            System.out.println("hello");
        }

        synchronized(Test.this) {
            System.out.println("hello");
        }

        synchronized(org.Test.this) {
            System.out.println("hello");
        }

        Test t = new Test();
        synchronized(t) {
            synchronized(t) {
                System.out.println("made it!");
            }
        }
    }
}