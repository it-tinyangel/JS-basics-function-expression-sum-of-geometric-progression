const sumGeometricProgressionFormula = function (n, r) { // n — number of the term, r — common ratio
	const firstTerm = 1; // the first term (a)
	const denominator = 1 - r; // denominator of formula

	if (denominator === 0) { // to avoid division by 0
		return firstTerm * n; // if r = 1, then return sum GP in this case
	} else {
		return firstTerm * (1 - (r ** n)) / denominator; // if r ≠ 1, then return sum GP in this case
	}
};

console.log(sumGeometricProgressionFormula(4, 3)); // writing result to console with arguments n=4 and r=3