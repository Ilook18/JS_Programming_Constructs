function Temperature(){
var degF=0.0;
var degC=0.0;
var choice=2;
switch(choice){
  case 1:
      degC=100.00;
      degF=(degC*9/5)+32;
      console.log(degF);
      break;
    case 2:
        degF=32.00;
        degC=(degF-32)*5/9;
        console.log(degC);
        break;
    default:
        console.log("Invalid choice");
        break;
}
}
Temperature();