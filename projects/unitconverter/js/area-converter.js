function AreaConverter () {
    
    // Units in Square Inch
    this.values = {
        "square-kilometer": 1550003100,
        "square-meter": 1550,
        "square-mile": 4014489600,
        "square-yard": 1296,
        "square-foot": 144,
        "square-inch": 1,
        "hectare": 15500031,
        "acre": 6272640
    };
    
    this.convert = function(From, To, Value) {
        return (Value * this.values[From]) / this.values[To]
    }
}