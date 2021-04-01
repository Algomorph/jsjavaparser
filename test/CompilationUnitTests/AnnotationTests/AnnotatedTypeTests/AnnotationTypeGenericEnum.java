interface Formatter {}

@interface PrettyPrinter {
    Class<? extends Formatter> value();
}

@interface Quality {
    enum Level { BAD, INDIFFERENT, GOOD }
    Level value();
}