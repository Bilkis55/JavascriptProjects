const addProuduct=(item)=>{
    productList.push(item);
    alert(`${item} is added to your cart`);
    
}
const printBill=(arr)=>{
    for(i=0;i<arr.length;i++){
        if(arr[i]=="shirt=$10"){
            z.push(10);}
        else if(arr[i]=="jeans=$20"){
            z.push(20);}
        else if(arr[i]=="grocery=$30"){
            z.push(30);}
        else if(arr[i]=="cosmetics=$50"){
            z.push(50);}
    }
    let res=z.reduce(function(acc,currEle){
            acc=acc+currEle;
            return acc;
        },0);
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    console.log(`total amount is $${res}`);
}
let productList_removed=[];
let productList=[];
let z=[];
const mainQuestion=()=>{
let menu=parseInt(prompt("enter item No. you want to buy 1.shirt=$10 2.jeans=$20 3.grocery=$30 4.cosmetics=$50"));
switch(menu){
    case 1 :
        addProuduct("shirt=$10");
        break;
    case 2 :
        addProuduct("jeans=$20");
        break;
    case 3 :
        addProuduct("grocery=$30");
        break;
    case 4 :
        addProuduct("cosmetics=$50");
        break;   
    default :
        alert("invalid input");  
        break;
}
let b=prompt("do you want to continue shopping?");
switch (b){
    case "yes" :
        mainQuestion();
        break;
    case "no" :
        console.log(productList);
        let c=prompt("do you want to edit list");
            switch (c){
                case "yes" :
                    let d=prompt("do you want to add or remove item?");
                    switch(d){
                        case "add" :mainQuestion();
                        break;
                        case "remove" :
                            let e=parseInt(prompt("enter item number you want to remove(count from 0)"));
                            for(i=0;i<productList.length;i++){
                                if(e!==i){
                                    productList_removed.push(productList[i]);
                                }
                            }   
                            console.log(productList_removed);
                            alert("click ok to see your bill");
                            printBill(productList_removed);
                        break; 
                    }
                break;
                case "no" : 
                    alert("click ok to see your bill");
                    printBill(productList);
                    break;
                default :
                    console.log("invalid input");  
                    break;
            }

}
}
mainQuestion();





//by using objects 
// const addProuduct=(item)=>{
//     productList.push(item);
//     alert(`${item.type} is added to your cart`);
    
// }
// const printBill=(arr)=>{
//     for(i=0;i<arr.length;i++){
//         if(arr[i]=="shirt=$10"){
//             z.push(10);}
//         else if(arr[i]=="jeans=$20"){
//             z.push(20);}
//         else if(arr[i]=="grocery=$30"){
//             z.push(30);}
//         else if(arr[i]=="cosmetics=$50"){
//             z.push(50);}
//     }
//     let res=z.reduce(function(acc,currEle){
//             acc=acc+currEle;
//             return acc;
//         },0);
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
//     console.log(`total amount is $${res}`);
// }
// let productList_removed=[];
// let productList=[];
// let z=[];
// const mainQuestion=()=>{
// let menu=parseInt(prompt("enter item No. you want to buy 1.shirt=$10 2.jeans=$20 3.grocery=$30 4.cosmetics=$50"));
// switch(menu){
//     case 1 :
//         addProuduct({type:"shirt",value :"10"});
//         break;
//     case 2 :
//         addProuduct({type:"jeans",value :"20"});
//         break;
//     case 3 :
//         addProuduct({type:"grocery",value :"30"});
//         break;
//     case 4 :
//         addProuduct({type:"cosmetics",value :"50"});
//         break;   
//     default :
//         alert("invalid input");  
//         break;
// }
// let b=prompt("do you want to continue shopping?");
// switch (b){
//     case "yes" :
//         mainQuestion();
//         break;
//     case "no" :
//         for(i=0;i<cloth.length;i++){
//             console.log(productList[i].value);}
//         let c=prompt("do you want to edit list");
//             switch (c){
//                 case "yes" :
//                     let d=prompt("do you want to add or remove item?");
//                     switch(d){
//                         case "add" :mainQuestion();
//                         break;
//                         case "remove" :
//                             let e=parseInt(prompt("enter item number you want to remove(count from 0)"));
//                             for(i=0;i<productList.length;i++){
//                                 if(e!==i){
//                                     productList_removed.push(productList[i]);
//                                 }
//                             }   
//                             console.log(productList_removed);
//                             alert("click ok to see your bill");
//                             printBill(productList_removed);
//                         break; 
//                     }
//                 break;
//                 case "no" : 
//                     alert("click ok to see your bill");
//                     printBill(productList);
//                     break;
//                 default :
//                     console.log("invalid input");  
//                     break;
//             }

// }
// }
// mainQuestion();