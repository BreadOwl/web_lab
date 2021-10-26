function cesar(str, shift, action) {

  if (action == 'encode'){
    for (var i = 0, x = str.length - 1; i < x; i++){
	  if (char.str[i] >= 192 && char.str[i] < 255){
	    str[i] = char.str[i] + shift;
	  }
	  if (str[i] == 255){
	    str[i] = 'а';
	  }
	  if (str[i] == 223){
	    str[i] = 'А';
	  }
	}
  }
  
  if (action == 'decode'){
    for (var i = 0, x = str.length - 1; i < x; i++){
	  if (char.str[i] >= 'А' && char.str[i] < 'я'){
	    str[i] = char.str[i] - shift;
	  }
	  if (char.str[i] == 224){
	    str[i] = 'я';
	  }
	  if (char.str[i] == 192){
	    str[i] = 'Я';
	  }
	}
  }
  
  
  return str;
}

console.log( cesar("эзтыхз фзъзъз", 25, 'decode') );//ответ: хакуна матата
