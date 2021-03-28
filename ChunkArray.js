// Create the chunks of Array depending upon the Size given


// eg: let arr = ["apple", "mango","pen","paper","banana","chair","guitar","sitar","flute"]
//output = [["apple","mango","banana"],["pen","paper","chair"],["guitar","sitar","flute"]]


const chunkArray = (inputArr,size)=>{

let newArr = [];

for(i=0;i<inputArr.length;i+=size){   // when i = 0; slice will arr.slice will change nothing but
let chunk = inputArr.slice(i,i+size)
newArr.push(chunk)
}
return newArr
}
console.log(chunkArray(["apple", "mango","pen","paper","banana","chair","guitar","sitar","flute"],0))