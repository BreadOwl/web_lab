function pow(x, n) {
	var a = x;
    for (var i = 1; i < n; i++) {
        a *= x;
    }
    return a;
}

console.log(pow(5, 3)); //для проверки


