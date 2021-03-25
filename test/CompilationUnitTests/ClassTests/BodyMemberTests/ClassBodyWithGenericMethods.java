private final class Test {
    protected final <T> void fromArrayToCollection(T[] a, Collection<T> c) {
        for (T o : a) {
            c.add(o);
        }
        add(o);
        c.f.add(o);
        c.f.r.t.add(o.d);
    }
    public abstract <T,K> T[][] get () throws Exception;
    abstract <H,W> void set (H[][][] hello, W world);
}