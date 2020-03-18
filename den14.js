function changeVocals(str) {
	//code di sini
	var kosong = '';
	for (var i = 0; i < str.length; i++) {
		switch (str[i]) {
			case 'a':
				kosong += 'b';
				break;
			case 'e':
				kosong += 'f';
				break;
			case 'i':
				kosong += 'j';
				break;
			case 'o':
				kosong += 'p';
				break;
			case 'u':
				kosong += 'v';
				break;
			case 'A':
				kosong += 'B';
				break;
			case 'E':
				kosong += 'F';
				break;
			case 'I':
				kosong += 'J';
				break;
			case 'O':
				kosong += 'P';
			case 'U':
				kosong += 'V';
				break;
			default:
				kosong += str[i];
				break;
		}
	}
	return kosong;
}

function reverseWord(str) {
  //code di sini
  var balik = ''
  for(var i = str.length-1; i >=0; i--){
    balik += str[i];
  }
  return balik;
}

function setLowerUpperCase(str) {
  //code di sini
  var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var low = 'abcdefghijklmnopqrstuvwxyz';
  var kata = ''
  for(var i = 0; i < str.length; i++){
    var check = true
    for(var j = 0; j < low.length; j++){
      if(str[i] === up[j]){
        check = false
        kata += low[j]
      }else if(str[i] === low[j]){
        check = false
        kata+= up[j]
      }
    }
    if(check){
      kata += str[i]
    }
  }
  return kata;
}

function removeSpaces(str) {
  //code di sini
  var kata = '';
  var counter = 0;
  for(var i = 0; i < str.length; i++){
    counter = 0;
    if(str[i] === ' '){
      counter++
    }
    if(counter === 0){
      kata += str[i]
    }
  }
  return kata
}

function passwordGenerator(name) {
  //code di sini
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var gantiVokal = changeVocals(name);
  var balikKata = reverseWord(gantiVokal);
  var besarKecil = setLowerUpperCase(balikKata);
  var penghilangSpasi = removeSpaces(besarKecil);
  return penghilangSpasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
