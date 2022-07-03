export const calculateExpressionFromString = (expression) => {
	var stringMath = require('string-math');
	return stringMath(expression);
}

export const isBtnTagFound = (tags, tagToCheck ) => {
	if (Object.values(tags).indexOf(tagToCheck) > -1) {
		return true;
	} else {
		return false;
	}
}
