function sum_sequence(a, b) {
	if (!parseInt(a) || !parseInt(b)) return false;
	
	let total = 0;
	for(let i = a + 1; i < b; i ++) {
		total += i;
	}
	console.log(total);
}

sum_sequence(3, 6);