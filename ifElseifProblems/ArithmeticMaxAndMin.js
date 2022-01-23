let a=10;
let b=20;
let c=30;
let operation1=a+b*c;
console.log("operation1=",operation1);
let operation2=a%b+c;
console.log("operation2=",operation2);
let operation3=c+a/b;
console.log("operation3=",operation3);
let operation4=a*b+c;
console.log("operation4=",operation4);

if(operation1>operation2 && operation1>operation3 && operation1>operation4){
    console.log("maximum=",operation1);
}else if(operation2>operation1 && operation2>operation3 && operation2>operation4){
    console.log("ma}ximum=",operation2);
}else if(operation3>operation1 && operation3>operation2 && operation3>operation4){
    console.log("maximum=",operation3);
}else if(operatio4>operation1 && operation4>operation2 && operation4>operation3){
    console.log("maximum=",operation4);
}
 if(operation1<operation2 && operation1<operation3 && operation1<operation4){
    console.log("minimum=",operation1);
}else if(operation2<operation1 && operation2<operation3 && operation2<operation4){
    console.log("minimum=",operation2);
}else if(operation3<operation1 && operation3<operation2 && operation3<operation4){
    console.log("minimum=",operation3);
}else if(operation4<operation1 && operation4<operation2 && operation4<operation3){
    console.log("minimum=",operation4);
}else{
    console.log("Invalid operation");
}