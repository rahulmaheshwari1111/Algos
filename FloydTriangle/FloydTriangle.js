// make a following pattern

/*123456789
  12345678
  1234567
  123456
  12345
  1234
  123
  12
  1 */

  const FloydTriangle = ()=>{

for(let i = 9; i>=1; i--){
    var l =""
    for(let j =1; j<=i;j++){
        l+=j
        
    }
   console.log(l)
}

  }
  FloydTriangle()