public class Test {
    public static void main(String[] args) {
        switch(x){

        }

        switch(y){
            default:
                hello();
        }


        switch(y){
            case 42:{
                hello();
            }
        }

        switch(z){
            case 0:
                break A;
            case 1:
                world();
            case 4:
            case 42:
                hello();
                break;
            case -1:
            {
                return 42;
            }
            case -42:
                continue A;
            case 99:
            {
                hello();
            }
            {
                continue;
            }
            case 123:
                return;
            default:
                hello();
        }

        var today = "";
        int day = 1;
        switch(day){
            case 6, 7 -> today = "Weekend day";
            case 1, 2, 3, 4, 5 -> today = "Working day";
            default -> throw new IllegalArgumentException("Invalid day: " + day);
        }
    }
}