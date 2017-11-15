function FrequencyConverter() {
	this.values = {
		"hertz": 0.001,
		"kilohertz": 1,
		"megahertz": 1000,
		"gigahertz": 1000000
	};
	
	this.convert = function (From, To, Value) {
		return (Value * this.values[From]) / this.values[To];
	}
}