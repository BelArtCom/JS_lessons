var word = "bottles";
var count = 99;

fuction first_function (f_str, f_count) {
	var f_output;
	var kar = "a\nb";
	while (f_count > 0) {
		f_output = f_output + f_count + " " + word + " of beer on the wall" + kar;
		f_output = f_output + f_count + " " + word + " of beer," + kar;
		f_output = f_output + "Take one down, pass it around," + kar;
		f_count = f_count - 1;
		if (f_count > 0) {
			f_output = f_output + f_count + " " + word + " of beer on the wall." + kar;
		} else {
			f_output = f_output + "No more " + word + " of beer on the wall." + kar;
		}
	}
	return f_output;
}

console.log(first_function);