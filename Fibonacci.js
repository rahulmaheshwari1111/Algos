// to find the nth term of fibonacci sequence.



// reccursive approach 

const fibonacci=(num)=>{return num<=1?1 : fibonacci(num-1)+ fibonacci(num-2)}
console.log(fibonacci(5))


