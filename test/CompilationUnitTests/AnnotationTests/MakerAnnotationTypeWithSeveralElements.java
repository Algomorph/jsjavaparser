@interface RequestForEnhancement {
    int id();
    // Unique ID number associated with RFE
    String synopsis(); // Synopsis of RFE
    String engineer(); // Name of engineer who implemented RFE
    String date();
    double pi = 3.14;
    // Date RFE was implemented
}