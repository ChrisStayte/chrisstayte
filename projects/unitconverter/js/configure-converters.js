var lengthConverter = new LengthConverter();
var areaConverter = new AreaConverter();
var timeConverter = new TimeConverter();
var speedConverter = new SpeedConverter();
var temperatureConverter = new TemperatureConverter();
var frequencyConverter = new FrequencyConverter();

$(function () {
	var cards = ["length", "area", "time", "speed", "temperature", "frequency"];
	
	cards.forEach(function(card) {
		var message = $("#" + card + " .message");
		var firstNumber = $("#" + card + " #first-number");
		var secondNumber = $("#" + card + " #second-number");
		var firstUnitType = $("#" + card + " #from");
		var secondUnitType = $("#" + card + " #to");
		var firstUnitTypeValue = firstUnitType.find(":selected").attr('class');
		var secondUnitTypeValue = secondUnitType.find(":selected").attr('class');
		
		function ChangeFirst() {
            var value = firstUnitType.find(":selected").attr('class');
            if (value == secondUnitTypeValue) {
                secondUnitTypeValue = firstUnitTypeValue;
                firstUnitTypeValue = value;
                firstUnitType.find("." + firstUnitTypeValue).prop('selected', 'selected');
                secondUnitType.find("." + secondUnitTypeValue).prop('selected', 'selected');

            } else {
                firstUnitTypeValue = value;
            }

            if (firstNumber.val() && secondNumber.val()) {
                FromFirst();
            }
        }

        function ChangeSecond() {
            var value = secondUnitType.find(":selected").attr('class');
            if (value == firstUnitTypeValue) {
                firstUnitTypeValue = secondUnitTypeValue;
                secondUnitTypeValue = value;
                firstUnitType.find("." + firstUnitTypeValue).prop('selected', 'selected');
                secondUnitType.find("." + secondUnitTypeValue).prop('selected', 'selected');

            } else {
                secondUnitTypeValue = value;
            }

            if (firstNumber.val() && secondNumber.val()) {
                FromFirst();
            }
        }
		
		
		function FromFirst() {
			var value = NaN;
			switch(card) {
				case "length":
					value = lengthConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
				case "area":
					value = areaConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
				case "time":
					value = timeConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
				case "speed":
					value = speedConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
				case "temperature":
					value = temperatureConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
				case "frequency": 
					value = frequencyConverter.convert(firstUnitTypeValue, secondUnitTypeValue, firstNumber.val());
					break;
			}
            
            if (isNaN(value)) {
                if (!message.is(":visible")) {
            		message.toggle();	
            	}
            } else {
                if (message.is(":visible")) {
                    message.toggle();
                }
                secondNumber.val(value);
            }
        }
		
		function FromSecond() {
			var value = NaN;
			switch(card) {
				case "length":
					value = lengthConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
				case "area":
					value = areaConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
				case "time":
					value = timeConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
				case "speed":
					value = speedConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
				case "temperature":
					value = temperatureConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
				case "frequency": 
					value = frequencyConverter.convert(secondUnitTypeValue, firstUnitTypeValue, secondNumber.val());
					break;
			}
            
            if (isNaN(value)) {
            	if (!message.is(":visible")) {
            		message.toggle();	
            	}
                
            } else {
                if (message.is(":visible")) {
                    message.toggle();
                }
                firstNumber.val(value);
            }
        }
		
		
		firstNumber.keyup(FromFirst);

        secondNumber.keyup(FromSecond);

        firstNumber.on("click", FromFirst);

        secondNumber.on("click", FromSecond);

        firstUnitType.on("change", ChangeFirst);

        secondUnitType.on("change", ChangeSecond);
		
	});

});