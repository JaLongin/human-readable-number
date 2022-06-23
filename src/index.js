module.exports = function toReadable (number) {
  let string = "";
  if (number == 0)
  return 'zero';
  switch(Math.floor(number / 100) * 100){
    case 100 : string = string +'one hundred '; break;
    case 200 : string = string +'two hundred '; break;
    case 300 : string = string +'three hundred '; break;
    case 400 : string = string +'four hundred '; break;
    case 500 : string = string +'five hundred '; break;
    case 600 : string = string +'six hundred '; break;
    case 700 : string = string +'seven hundred '; break;
    case 800 : string = string +'eight hundred '; break;
    case 900 : string = string +'nine hundred '; break;
  }
  if (number % 100 < 20 && number % 100 > 9)
  switch (number % 100){
    case 10: string = string + 'ten'; break;
    case 11: string = string + 'eleven'; break;
    case 12: string = string + 'twelve'; break;
    case 13: string = string + 'thirteen'; break;
    case 14: string = string + 'fourteen'; break;
    case 15: string = string + 'fifteen'; break;
    case 16: string = string + 'sixteen'; break;
    case 17: string = string + 'seventeen'; break;
    case 18: string = string + 'eighteen'; break;
    case 19: string = string + 'nineteen'; break;
  }
  else {
    switch (Math.floor(number - ((number % 10) + (Math.floor(number / 100) * 100)))){
        case 20: string = string + 'twenty '; break;
        case 30: string = string + 'thirty '; break;
        case 40: string = string + 'forty '; break;
        case 50: string = string + 'fifty '; break;
        case 60: string = string + 'sixty '; break;
        case 70: string = string + 'seventy '; break;
        case 80: string = string + 'eighty '; break;
        case 90: string = string + 'ninety '; break;
    }

    switch (number % 10){
        case 1: string = string + 'one'; break;
        case 2: string = string + 'two'; break;
        case 3: string = string + 'three'; break;
        case 4: string = string + 'four'; break;
        case 5: string = string + 'five'; break;
        case 6: string = string + 'six'; break;
        case 7: string = string + 'seven'; break;
        case 8: string = string + 'eight'; break;
        case 9: string = string + 'nine'; break;
      }
      
  }
  if (string[string.length-1]==' ')
    string = string.slice(0,-1);
  return string;
}
