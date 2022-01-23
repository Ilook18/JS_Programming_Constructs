function Palindrome()
{
    var number = 111;
    var temp;
    var n=0;
   var rev=0;
     temp = number;
    while(number>0)
    {
     n = number%10;
     number = parseInt(number/10);
     rev = rev*10+n;
     }
    if(rev==temp)
    {
        console.log("Palindrome Number");
    }
    else
    {
        console.log("Not a Palindrome number");
    }
    
}
 Palindrome();


