function TimeConverter () {
    
    // Units in Nanosecond
    this.values = {
        "nanosecond": 1,
        "microsecond": 1000,
        "millisecond": 1000000,
        "second": 1000000000,
        "minute": 60000000000,
        "hour": 3600000000000,
        "day": 86400000000000,
        "week": 604800000000000,
        "month": 2629746000000000,
        "year": 31556952000000000,
        "decade": 315360000000000000,
        "century": 3153599999996478000
    };
    
    this.convert = function(From, To, Value) {
        return (Value * this.values[From]) / this.values[To]
    }
}