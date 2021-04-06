import java.util.function.Function;

class LambdaExpression{
    public static void main(String[] args){
        Function<Integer, Integer> lambda = (x) -> x + 2;
    }
}