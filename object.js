


// let change=Symbol("tejal");
// let object={

   
//     "employee Name":"Bilkis",
//     [change]:"anjum",
//     age:32,
    
// }
// console.log(change);


// let arr=["tejal","bilkis","sakshi","sarthak","snehal","a"];
// let newarr=arr.filter((curr)=>{curr.length>5}).map((curr)=>toUpperCase());
// console.log(newarr);

// const student={
//     fullName:"bilkis Sayyad",
//     marks:98,
//     printMarks:function(){
//     console.log(student.marks);
//     }
// };
// console.log(student.printMarks);
const employee={
    caltax1(){
        console.log("tax rat is 10 ");
    },
    caltax2:function(){
        console.log("tax is rate 10v");
    }

};
const karanarjun={
    salary:50000,
}
karanarjun.__proto__employee

console.log(karanarjun);