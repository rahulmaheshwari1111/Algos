// Given an integer, reverse the order of the digits.
const reverseInteger = (int)=>{

 return int.toString().split('').reverse().join('')


}
console.log(reverseInteger(123))