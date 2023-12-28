function program()
{
    var name=(prompt("Enter your name :"));
    console.log(name)
    var education=(prompt("Enter the education : "));
    console.log(education);
        var subject=(prompt("Enter the subject math or english :"));
    
     if(subject=="math")
    {
 var operation=(prompt("Enter the correct operation addition +,substraction -,division/,modulor%,multiplication*"));

        switch(operation)
        {
            
            case "+":
                var firstNum=parseInt(prompt("enter the first number :"));
                var secondNum=parseInt(prompt("Enter the second number :"));
                var add=firstNum+secondNum;
                console.log("Addition of two numbers are :" , add);
                break;
                case "-":
                    var firstNum=parseInt(prompt("enter the first number :"));
    var secondNum=parseInt(prompt("Enter the second number :"));

                    var sub=firstNum-secondNum;
                    console.log("The subtraction of two numbers are :",sub);
                    break;
                    case"/":
                    var firstNum=parseInt(prompt("enter the first number :"));
    var secondNum=parseInt(prompt("Enter the second number :"));

                    var div=firstNum/secondNum;
                    console.log("The Division of two numbers are :",div);
                    break;
                    case "%":
                        var firstNum=parseInt(prompt("enter the first number :"));
    var secondNum=parseInt(prompt("Enter the second number :"));

                        var mod=firstNum%secondNum;
                        console.log("The module of two numbers are :",mod);
                        break;
                        case "*":
                            var firstNum=parseInt(prompt("enter the first number :"));
    var secondNum=parseInt(prompt("Enter the second number :"));

                            var mul=firstNum*secondNum;
                            console.log("The multiplication of two numbers are :", mul);
                
                        break;
                        default:
                            console.log("Entered correct number :");

        }
        console.log("thank you for choosing");
       
    }
    else if(subject=="english")
    {
        var option=(prompt("Enter your option : translate 1 or phrase 2:"));


        switch(option)
          {
            case "translate":
                var language=(prompt("Enter the language : hindi  or marathi "));
                if(language=="hindi")
                {
                    console.log("Namaste!");
                }
                else{
                    console.log("Namaskar!");
                }
                break;
            case "phrase":
                console.log("You can't judge a book by its cover");
                break;
                default:
                    console.log("Please enter correct case ");
          }
    
    }
    else{
        console.log("choose correct option.");
    }
    }



program();


