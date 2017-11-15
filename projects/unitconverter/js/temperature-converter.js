function TemperatureConverter() {
	TemperatureTypeEnum = {
		FAHRENHEIT: "fahrenheit",
		CELSIUS: "celsius",
		KELVIN: "kelvin"
	};
	
	this.convert = function(From, To, Value) {
		switch(From) {
			case TemperatureTypeEnum.FAHRENHEIT:
				if (To == TemperatureTypeEnum.CELSIUS) {
				return ((Value - 32) * 5) / 9;
				} else {
					return (Value + 459.67) * (5 / 9);	
				}
				break;
			case TemperatureTypeEnum.CELSIUS:
				if (To == TemperatureTypeEnum.FAHRENHEIT) {
					return (Value * (9 / 5)) + 32;
				} else {
					return Value + 273.15;
				}
				break;
			case TemperatureTypeEnum.KELVIN:
				if (To == TemperatureTypeEnum.CELSIUS) {
					return Value - 273.15;
				} else {
					return (Value * (9 / 5)) -459.67;
				}
				break;
			
		}
	}
}