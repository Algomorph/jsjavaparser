class Test {
    public static void main(String[] args) {
        {
            new Runnable() {
                @Override
                public void run() {
                    new Runnable() {
                        @Override
                        public void run() {
                        }
                    }.hashCode();
                }
            }.run();
        }
        {
            int i = 42;
        }
    }
}