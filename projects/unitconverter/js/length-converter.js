function LengthConverter() {

    // Units in Nanometer
    this.values = {
        "kilometer": 1000000000000,
        "meter": 1000000000,
        "decimeter": 100000000,
        "centimeter": 10000000,
        "millimeter": 1000000,
        "micrometer": 1000,
        "nanometer": 1,
        "mile": 1609344000000,
        "yard": 914400000,
        "foot": 304800000,
        "inch": 25400000,
        "nautical-mile": 1852000000000,
        "light-year": 9460730472580800000000000
    };

    this.convert = function (From, To, Value) {
        return (Value * this.values[From]) / this.values[To]
    }
}
