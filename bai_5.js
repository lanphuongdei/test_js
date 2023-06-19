function check_prime_number(a) {
	let is_prime = true;
	
	if (a === 1) {
		return a;
	}
	
	if (a !== 1) {
		for (let i = 2; i < a; i ++) {
			if (a % i == 0) {
				is_prime = false;
				break;
			}
		}
		
		if (is_prime) {
			return a;
		}
	}
}

function sum_prime_number(n) {
	if (!parseInt(n)) return false;
	
	let total = 0;
	
	if (n === 1) {
		total = n;
		return;
	}
	
	for (let i = 1; i < n; i ++)  {
		if (check_prime_number(i) !== undefined) {
			total += check_prime_number(i);
		}
	}
	
	console.log(total);
}

sum_prime_number(5);