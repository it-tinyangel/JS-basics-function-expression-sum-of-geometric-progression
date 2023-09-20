const sumGeometricProgression = function (n, r) { // n — number of the term, r — common ratio
	let result = 0; // save the amount
	let currentValue = 1; // the first term (a)
	for (let i = 0; i < n; i++) { // loop is executed n times
		result += currentValue; // added the current term GP to the result
		currentValue *= r; // updated value
	}
	return result; // returns result as the sum of the GP
};

console.log(sumGeometricProgression(5, 2)); // writing result to console with arguments n=5 and r=2