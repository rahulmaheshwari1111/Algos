// find l.c.m of two numbers

const GCD = (a,b)=>{

    A= maths.abs(a)
    B= maths.abs(b)
    
     return (B===0)? A : GCD(A,A%B)
    
    
    }
    

 function leastCommonMultiple(a, b) {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / GCD(a, b);
  }