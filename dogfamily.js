function dogInformation()
{
    let dog=(prompt("Enter the dog name please canidae or deerhound"));
    switch(dog)
    {
       case "canidae":
       let d=prompt("Do you want to know about canidae then entered yes")
        switch(d)
        {
            case "yes":
                console.log("domestic mammal of the family");
                own();
                function own(){
                let o=(prompt("do you want to know about first owner second third owner"));
                switch(o)
                {
                    case "yes":
                        let name="Ramesh baburao kamble";
                        let address="Baner pune-34256."
                        let mobileNo="937016889"
                        console.log(name,address,mobileNo);
                        break;
                        default:
                            console.log("somthing went wrong.");
                            
                }}
                break;
                default:
                    console.log("i don't want to know more about this dog");
        }
        break;
        case "deerhound":
          let  b=prompt("Do you want to know about deerhound then entered yes");
          switch(b)
          {
            case "yes":
                console.log("scottish family");
                break;
                
                default:
                    console.log("i don't want to know more about this dog");

          }
          default:
            console.log("enter correct dog family ");

 
            
    }

}dogInformation();
function dogName()

{


}
