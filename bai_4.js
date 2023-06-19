function check_prime_number(a) {
	if (!parseInt(a)) return false;
	let is_prime = true;
	
	if (a === 1) {
		console.log(is_prime);
		return;
	}
	
	if (a !== 1) {
		for (let i = 2; i < a; i ++) {
			if (a % i == 0) {
				is_prime = false;
				break;
			}
		}
		
		if (is_prime) {
			console.log(true);
		}
		else {
			console.log(false);
		}
	}
	
}

check_prime_number(5);