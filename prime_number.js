let num = 13;
let count=0;
for(let i=1; i<=num; i++){
 if(num%i==1){
    count++
 }

}if (count==1) console.log("prime number");
else console.log("Not prime number");