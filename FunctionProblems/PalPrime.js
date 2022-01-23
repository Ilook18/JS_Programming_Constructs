function PalPrime()
{
    var number = 11;
    var count = 0;
    var rev=0;
    var rem=0;
    for(var i=1;i<=number;i++){
        if(number%i==0){
            count++;
        }
    }
        if(count==2)
        {
            while(number>0)
            {
                rem = number%10;
                number = parseInt(number/10);
                rev = rev*10+rem;

            }
            
    }
    count1=0;
    for(var j=1;j<=rev;j++)
    {
        if(rev%j==0)
        {
          count1 =  count1+1;
        }
    }
    if(count1==2)
    {
        console.log("Prime Number")
    }
    else
    {
        console.log("Not a prime Number");
    }

}
PalPrime();
