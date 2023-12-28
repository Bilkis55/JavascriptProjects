
function shopping() {
    var price = [2340, 1960, 4050, 6030];
    var cart = [];

    var ar = (prompt(`1)jeans 2) shirt 3)grocery 4) cosmetics enter the option 1,2,3,4`));
    switch (ar) {
        case "1":
            var add = prompt("do you want add jeans to the cart : ");
            if (add == "yes") {
                cart.push("jeans");

                console.log(cart.concat(" " + price[0]).join(''));
                var shop = prompt("do you want to continue shopping ?? or buy cart item");
                if (shop == "yes") {

                    shopping();

                }
            }

            break;
        case "2":
            var add = prompt("do you want add shirt to the cart : ");
            if (add == "yes") {
                cart.push("shirt");

                console.log(cart.concat(" " + price[1]).join(''));
                var shop = prompt("do you want to continue shopping ?? or buy cart item");
                if (shop == "yes") {
                    shopping();

                }
            }
            break;
        case "3":
            var add = prompt("do you want add grocery to the cart : ");
            if (add == "yes") {
                cart.push("grocery");

                console.log(cart.concat(" " + price[2]).join(''));
                var shop = prompt("do you want to continue shopping ?? or buy cart item");
                if (shop == "yes") {
                    shopping();


                }
            }

            break;
        case "4":
            var add = prompt("do you want add cosmetics to the cart : ");
            if (add == "yes") {
                cart.push("cosmetics");

                price.push();
                console.log(cart.concat("  " + price[3]).join(''));
                var shop = prompt("do you want to continue shopping ?? or buy cart item");
                if (shop == "yes") {
                    shopping();

                }
            }
            break;
        default:

            console.log("select right product:");

    }



    price.reduce((a, b) => {
        return c = a + b;

    }, 0);


}
shopping();
console.log("total price is : ", c);

let add=prompt("do you want to add items to the cart :");
switch(add)
{
    case "add":
        shopping();
        console.log("total price is : ", c+c);
        default:
            console.log("Thanks for shopping ! have a great day ");

}