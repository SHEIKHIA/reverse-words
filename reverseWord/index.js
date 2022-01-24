let string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

let newstring = string.split(',');
//console.log(newstring);
 var output = [];

 for (word of newstring){
   for (let i = word.length - 1;i>=0;i--){
     output.push(word[i]);
   }
 }
let fixed =[];
for(i=word.length-1; i>=0;i-- ){
  fixed.push(word[i])
}

console.log(fixed.join(''));