function regForm() {
    var name = prompt("enter name");
    var middlename = prompt("enter middle name");
    var surname = prompt("enter surname");
    console.log(name + " " + middlename + " " + surname);

    
        var subject = prompt("enter subject arts commerce science");
        switch (subject) {
            case "arts":
                console.log("thank you for choosing arts :")
                var sub1 = prompt("enter subject1");
                console.log("thank you for choosing " + sub1);
                var sub2 = prompt("enter subject2");
                console.log("thank you for choosing " + sub2);
                var sub3 = prompt("enter subject3");
                console.log("thank you for choosing " + sub3);
                break;
            case "commerce":
                console.log("thank you for choosing commerce: ")
                var sub1 = prompt("enter subject1");
                console.log("thank you for choosing " + sub1);
                var sub2 = prompt("enter subject2");
                console.log("thank you for choosing " + sub2);
                var sub3 = prompt("enter subject3");
                console.log("thank you for choosing " + sub3);
                break;
            case "science":
                console.log("thank you for choosing science : ");
                var sub = prompt("enter subject phy chem math");
                switch (sub) {
                    case "phy":
                        console.log("thank u for choosing physics");
                        break;
                    case "chem":
                        console.log("thank you for choosing chemistry");
                        break;
                    case "math":
                        var opr = prompt("enter opeartion + - or /");
                        if (opr == "+") {
                            var num1 = parseInt(prompt("enter first number"));
                            var num2 = parseInt(prompt("enter second number"));
                            console.log(num1 + num2);
                        }
                        else if (opr == "-") {
                            var num1 = parseInt(prompt("enter first number"));
                            var num2 = parseInt(prompt("enter second number"));
                            console.log(num1 - num2);
                        }
                        else {
                            var num1 = parseInt(prompt("enter first number"));
                            var num2 = parseInt(prompt("enter second number"));
                            console.log(num1 / num2);
                        }
                        break;
                        default:
                            console.log("sorry");

                }





        }
        console.log("thank you for filling form");
    }
    regForm();

var continue1=prompt("do you want to continue then type yes ");
if(continue1=="yes")
{
   regForm(); 
}
else
{
    console.log("good bye!");
}
