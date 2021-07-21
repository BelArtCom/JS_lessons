function bark(p_name, p_weight) {
	var result;
	if (p_weight > 20) {
		result = p_name + " says WOOF WOOF";
	} else {
		result = p_name + " says woof woof";
	}
	return result;
}
console.log(bark("rover", 23));
console.log(bark("spot", 13));
console.log(bark("spike", 53));
console.log(bark("lady", 17));
