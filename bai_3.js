function sum_common_divisor(a) {
	if (!parseInt(a)) return false;
	let total = 0;
	
	for (let i = 1; i <= a; i ++) {
		if (a % i == 0) total += i;
	}
	
	console.log(total);
}

sum_common_divisor(9);