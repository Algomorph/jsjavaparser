enum Coin {
    T,PENNY(1L), NICKEL(), DIME(0x10,-42), QUARTER(0b11),
    R(0222), R1(true), R5(false), R3(null), R4(3.14), T('a'),
    T1("hello\u1984"), T34(-0x1.8p1);
}