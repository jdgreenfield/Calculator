// 'use stroct;'

var calculatorState = {
	currentValue: '',
	previousValue: '',
	pendingOperation: ''
};

var app = {
	clickNumber : function(digit) {
		alert('you clicked: ' + digit)
	},
	clickDecimal: function() {
	},
	clickOperator: function(op) {
	},
	clickEquals: function() {
	}
}