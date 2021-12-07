/** @format */
let calculator = {
	read: function read() {
		this.a = +prompt("put your first value");
		this.b = +prompt("put your second value");
	},
	sum: function () {
		if (isNaN(this.a) || isNaN(this.b)) {
			return "dont true values";
		} else {
			return this.a + this.b;
		}
	},
	mul: function () {
		if (isNaN(this.a) || isNaN(this.b)) {
			return "dont true values";
		} else {
			return this.a * this.b;
		}
	},
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
