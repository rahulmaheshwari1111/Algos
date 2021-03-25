// input a string and checkwhether it is a pallindrome or not.

const pallindrome = (inputString)=>{
let input = inputString.toLowerCase();
let checkInput=input.split('').reverse().join('')
console.log(checkInput)
if(input=== checkInput){
    console.log('its a palindrome')
}
else 
console.log('Not a palindrome')
}

pallindrome('akA')