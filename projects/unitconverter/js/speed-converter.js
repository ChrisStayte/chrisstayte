function SpeedConverter() {
	
	// Units in Foot Per Second
	this.values = {
		"miles-per-hour": 1.46667,
		"foot-per-second": 1,
		"meter-per-second": 3.28084,
		"kilometer-per-hour": 0.911344,
		"knot": 1.68781
	};
	
	this.convert = function(From, To, Value ) {
		return (Value * this.values[From]) / this.values[To];
	}
}