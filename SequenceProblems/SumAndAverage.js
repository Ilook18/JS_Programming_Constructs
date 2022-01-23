let sum=0;
for(let i=0;i<5;i++){
let number=Math.floor(Math.random() * 89) + 10;
console.log("number",number);
sum=sum+number;
}
console.log("sum",sum);
let average=sum/5;
console.log("average",average);