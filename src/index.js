module.exports = function getZerosCount(number, base) {
  let arr = []; 
  let arr1 = [];
  let b = base;
  let s = 0;
  for (let i = 2; i <= b; i++) {
    while(b % i == 0) {
      b = b / i;
      s++;
      if (arr[arr.length-1] != i){
        arr.push(i);
      }
    }
    if (s == 0) {
      continue;
    }
    arr1.push(s);
    s = 0;
  }

  let ch = 0;
  let x = 0;
  let arr2 = [];

  for (let j = 0; j < arr.length; j++) {
    for (let i = 1; i < 100; i++) {
      let power = Math.pow(arr[j],i);
      if (number <= power) {
        x = i;
        break;
      } 
    }
    for (let i = x; i >= 1; i--) {
      ch += Math.floor(number/Math.pow(arr[j],i));
    }
    arr2.push(Math.floor(ch/arr1[j]));
    ch = 0;
  }
  return Math.min(...arr2);
}