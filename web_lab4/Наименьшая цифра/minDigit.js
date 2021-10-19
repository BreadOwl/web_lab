function minDigit(x){
  var min = 9;
  
  while (x > 0) { 
    if (x % 10 < min){
      min = x % 10;
	}
	x = Math.floor(x / 10); //целочисленное деление
  }
  
  return min;
}

console.log( minDigit(3782932) ); //для проверки