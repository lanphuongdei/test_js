function spherical_volume_calculator(r) {
	if (!parseInt(r)) return false;
	
	let v = 4 * 3.14 * Math.pow(parseInt(r), 3);
	console.log(v);
}

spherical_volume_calculator(2);