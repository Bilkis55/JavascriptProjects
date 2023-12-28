// let a="anjum";
// function outer()
// {
//     let b="good";
//     function inner()
//     {
//         let c="girl";
//         console.log(a+b+c);
//     }inner();
// }outer();



// let num1= parseInt(prompt("Enter a number"));
// let num2=parseInt(prompt("enter the number"));
// function addition(a,b)
// {
//     let total=num1+num2;
//     console.log(total);
// }addition(num1,num2);


// function multiplication(c,d)
//     {
//         let mul=c*d;
//         console.log(mul);
//     }multiplication(num1,num2);

// let name="sarthak";
// function outer()
// {
//     let feedback="good";
//     function inner()
//     {
//         let gender="Boy";
//         console.log(name+feedback+gender);
//     }
//     return inner;
// }
// let result=outer();
// result();


// function firstfun(change)
// {
//     console.log(`my firstfunction & ${change()}`);
// }
// function secondfun()
// {
//     let c="my second function";
//     return c
// }
// firstfun(secondfun);

// let c=0,d=0;
// let expr=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// let email=prompt("Enter email address");
// if(expr.test(email))
// {
//     console.log("valid");
// }else
// {
// console.log("invalid");
// }
// let arr=email.split( '' );
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]=='@')
//     {
//         c=c+1;
//         console.log(c);
//     }
//     if(arr[i]=='.')
//     {
//         d=d+1;
//         console.log(d);
//     }
// }
// if(c==0)
// {
//     console.log("@ missing");

// }
// else{
//     console.log("valid");
// }
// if(d==0)
// {
//     console.log(". is missing");
// }

setTimeout(()=>{
    console.log("Hello");
},3000);
console.log("dfdgsadfdsfsfs");