
//Q1] write the programe to reverse the array without using reverse inbuilt function[1,2,3,4].

const reverseArr=()=>{
        let newarr=[];
        let inarr=[1,2,3,4];
        console.log(inarr);
        for(i=0;i<=inarr.length;i++)
        {
            newarr[i]= inarr.pop();
           
        }
        console.log(newarr);
    }
    
    reverseArr();
   
//Q2]write the programe to check if the given number or string is palindrom or not[ex.aba-121].

//Q3] write the program to check if the given number is  armstrong number or not[153].
function armstrong(){
let number;
number = prompt("Enter a number !");

let n = number.length; 

let sum = 0;

for(let i=0;i<n;i++)
{
    let digit = number[i]-'0';
     sum = (sum + Math.pow(digit,n));
    // sum=sum+(math.floor(digit,n));
    // sum=(sum+Math.ceil(digit,n));
}

if(sum == number) 
{
    console.log(number, "is an Armstrong Number");
}
else{
    console.log(number, "is not an Armstrong Number");
}

}armstrong();
// -----------------------------------------

//Q4] write a program of unshift operation without using inbuilt unshift function.
let arr=(prompt("Enter the string or number with space"))
let nwarr=arr.split(" ");
for(i=(nwarr.length-1);i>=0;i--)
{
         nwarr[i+1]=nwarr[i];
}
nwarr[0]=parseInt(prompt("Enter the number"));
console.log(nwarr);



// Q5] write a program to neglect any character from string given by user and print that string
// without that particualr character again.[shailesh o/p shilesh ].

 let str="shailesh";
 let str1=str.split("a").join('');
 console.log(str1);
// -----------------------------------------------------------------------------



