public class Test {
    public static void main(String[] args) {
        try {
            throw BlewIt();
        } catch (RuntimeException r) {
            System.out.println("Caught RuntimeException");
        } catch (BlewIt b) {
            System.out.println("Caught BlewIt");
        }

        try {
            throw ClassNotFoundException(42);
        }
        catch (ClassNotFoundException | IllegalAccessException ex) {
            world();
        }
        catch (final ClassNotFoundException | IllegalAccessException | BlewIt ex) {
            world();
        }

        try {
            throw BlewIt();
        } catch (BlewIt b) {
            System.out.println("Caught BlewIt");
        } finally {
            System.out.println("Uncaught Exception");
        }

        try {
            throw BlewIt();
        } finally {
            System.out.println("Uncaught Exception");
        }
    }
}