class Test {
    public static void main(String[] args) {
        boolean i = i > 42 && y < 13;
        i = i > 42 && y < 13 && false;
        i = i > 42 || y < 13 && false;
        i = i > 42 ? true : i > -42 && y < 13;
    }
}