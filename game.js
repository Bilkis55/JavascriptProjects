function personalDetails()
{
    let name=(prompt("Enter your name"));

    let a=name;
    if(a==name)
    {
        console.log("Welcome! " +name);
    }
}personalDetails();
 function game()
 {
    let num=parseInt(prompt("Enter the number :"));
    if(num>=0&&num<=100)
    {
        console.log("Congratulations! You Won the Lottory ");
        call();
    }
    else{
        console.log("oops!you loose the lotry try again");
        call();
    }
    function call()
    {
        let yes=(prompt("Do you want to continue :"));
        if(yes=="yes")
        {
        game();
        }
      else{
        console.log("good bye! thanks for contacting....");

    }
 }

 }game();

