count=0;
maximim=0;
minimum=1000;
for(i=0;i<5;i++){
    let number=Math.floor(Math.random() * 100) + 100
    console.log(number);
    if(number>maximim){
       maximim=number;
    }else if(number<minimum){
        minimum=number;
    }
    }
    console.log("maximum",maximim);
    console.log("minimum",minimum);
    