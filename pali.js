let str= "naman";
let bag="";
for(let i=str.lenght-1; i>=0; i--){
   bag+=str[i];
}
if(str==bag) console.log("yes");
else console.log("no");