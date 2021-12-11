/** @format */
let calculator = {
	read: function () {
		this.a = prompt("put your first value");
		if (this.a === null || isNaN(+this.a) || this.a.trim() === "") {
			alert("error in your first value");
			return this.read();
		}

		this.b = prompt("put your second value");
		if (this.b === null || isNaN(+this.b) || this.b.trim() === "") {
			alert("error in your second value");
			return this.read();
		}
	},
	sum: function () {
		return this.a + this.b;
	},
	mul: function () {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
