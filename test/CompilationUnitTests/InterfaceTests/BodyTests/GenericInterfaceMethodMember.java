public interface Service<T,U> {
    T executeService(U... args) throws Exception;
}