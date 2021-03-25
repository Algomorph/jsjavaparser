class Test {
    Test() {}
    Test(int i){
        i++;
        int c = (int)(i--+--i);
    }
    Test(int y, int i) throws World {
        Test(i--);
        y += ++i;
    }
}