import java.util.ArrayList;
import java.util.function.*;

class LambdaExpression{
    public static void main(String[] args){
        Function<Integer, Integer> lambda0 = (x) -> x + 2;
        Function<Integer, Integer> lambda1 = x -> x + 2;
        Function<Integer, Integer> lambda2 = (Integer x) -> x + 2;
        BiFunction<Integer, Integer, Integer> lambda3 = (x, y) -> x - y;
        BiFunction<Integer, Integer, Integer> lambda4 = (Integer x, Integer y) -> x - y;
        Function<Integer[], Integer> lambda5 = (x) -> x[0] - x[1];
        BiFunction<Integer[], Integer[], Integer> lambda6 = (Integer[] x, Integer[] y) -> x[0] - y[0];
        Function<ArrayList<Integer>, Integer> lambda7 = (x) -> x.get(0) - x.get(1);
        BiFunction<ArrayList<Integer>, ArrayList<Integer>, Integer> lambda8 =
                (ArrayList<Integer> x, ArrayList<Integer> y) -> x.get(0) - y.get(0);

    }
}