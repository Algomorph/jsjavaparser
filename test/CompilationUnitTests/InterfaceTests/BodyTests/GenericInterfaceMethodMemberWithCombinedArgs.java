public interface Service<T,U> {
    T executeService(int a, U... args) throws Exception;
}