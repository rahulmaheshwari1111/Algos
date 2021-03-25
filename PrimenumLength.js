// to find total count of prime numbers between any intervals

const primeLength =(num)=>{
let d = [];
for(i=1;i<=num;i++){
    let c=0;
    for(j=1;j<=i;j++){
        if (i%j === 0)
{
c+=1

}  
  }
  if (c===2){
      d.push(c)
  }
}
console.log(d.length)

}
primeLength(5)


