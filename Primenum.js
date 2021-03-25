// Print first n prime numbers

const prime = (num)=>{
    
    for(let i=1; i<=num;i++){
        let c =0;
        for (let j=1;j<=i;j++){
            if(i%j===0){
                c+=1
            }
        }
        if(c===2){
            
            console.log(" " + i + " ")
            
        }
    }
    

}
prime(20)