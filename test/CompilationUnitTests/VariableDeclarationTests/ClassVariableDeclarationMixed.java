public class Test {
    private static int a;
    static int b[];
    List<?> c[];
    Map<int[], List<?>> d;
    Map<String, List<? extends Hello.World>> d;

    int a = 42;
    float a1 = 42, a2 = a1;
    private Object a2 = new Object();
    Object a3 = new <T>Object();
    Object a4 = new <T1,T2>Object();
    static private Runnable r = new Runnable() {
        @Override
        public void run() {
            // TODO Auto-generated method stub

        }
    };
    Object[] b = new java.lang.Object[0];
    int b1[] = new int[]{0,1,2};
    int b2[] = new int[5];
    int b3[][] = new int[5][b1.length];
    int b4[][][] = new int[5][6][];
    List<?> c = new ArrayList<String>();
    List<String> c1 = new java.util.ArrayList<>();
    List<?> c[][] = new List<?>[][] {{new ArrayList<String>()}};
    Map<int[], List<?>> d = null;
    Map<String, List<? extends java.lang.String>> e = new HashMap<>();
}