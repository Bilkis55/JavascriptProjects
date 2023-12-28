
// // fun();

//  fun="hello";
//  var fun;
//  console.log(fun);


//  let str="abcdefaghabcdefgha";
//  let arr=str.split('a');
//  let narr=arr.join("");
//  console.log(narr);


function outerFunc() {
    var a = 10;
    function innerfunc1(){
      var  b=20;

    
    function innerFunc() {
      console.log(a);
      console.log(b);

    }innerFunc();
}innerfunc1();

  }
  
  outerFunc();

  // 1)print number from 1 to 10
  // let n=10;

  // for(let i=0;i<=n;i++){
  //    console.log(i);
  // }

  //2) print the odd numbers less than 100

  // let tot=100;
  // for(let i=0;i<=tot;i++)
  // {
  //   if(i%2!==0)
  //   {
  //     console.log(i);
  //   }
  // }

  //3) print the multiplication table with 7

  // let num=7;
  // for(let i=1;i<=10;i++)
  // {
  //   console.log(num*i);
  // }
//4) print all the multiplication tables with numbers from 1 to 10

// for (let i=1;i<=10;i++)
// {
//  for (let j=1;j<=10;j++)
//  {
//   console.log(j*i);
// }
// }

// 5) Calculate the sum of numbers from 1 to 10

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newarr=arr.reduce((acc,num)=>{
//       sum=acc+num;
//       return sum;
// },0);
// console.log(newarr);

//6) calculate 10!
let number=10;
let fact=1;
for(let i=1;i<=number;i++)
{
 
  fact*=i
}
console.log(`factorial of 10! is${fact}`);


