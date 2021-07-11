const BEER = " of beer on the wall";

function first_function(f_word, f_count) {
	var result = "";
	var delimiter = "\n";
	while (f_count > 0) {
		result += f_count + " " + f_word + BEER + delimiter + f_count + " " + f_word + " of beer," + delimiter + "Take one down, pass it around," + delimiter;
		--f_count;
		if (f_count > 0) {
			result += f_count + " " + f_word + BEER + "." + delimiter;
		}
	}
	result += "No more " + f_word + BEER + "." + delimiter;
	return result;
}

module.exports = first_function;