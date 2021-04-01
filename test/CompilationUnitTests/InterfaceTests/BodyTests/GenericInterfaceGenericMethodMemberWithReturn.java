public interface Service<T,U> {
    <F extends U> T executeService(Collection<?> c, @anno U... args) throws Exception;
}