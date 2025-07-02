// const greet =(a,b)=> a+b //immediate auto calling function
// console.log(greet(2,3));

// const greet =(a,b)=>{
//     a+b;
// }

// const greet =(a,b)=> {
//     return a+b;
// }
// console.log(greet(2,3));


// (function(){
//     console.log("heyyyyyyyyyy");
// })()

// (function(a,b){
//     console.log(a+b);
// })(2,3)

// const otpGenerator=()=>{
//     console.log(Math.floor(Math.random()*1000000))
// }

// otpGenerator();

// const otpGenerator=()=>{
//     return (Math.floor(Math.random()*1000000))
// }

// console.log(otpGenerator());


// console.log(typeof Math);

// const introduction={
//     name:"Utkarsh Gupta",
//     email:"utkarshagupta123@gmail.com",
//     intro:function(){
//         console.log(`Hey its me ${this.name}`);
//     }
// }
// introduction.intro();

// console.log(introduction.name);
// console.log()

// const name= introduction
// console.log(name);

// enum Role{
//     user="user",
//     uploader="uploader"
// }


// const Role={
//     user:"user",
//     uploader:"uploader"
// }

// Object.freeze(Role);
// Role.thirdperson="admin"

// let fruits=['orange', 'mango','grapes','apple'];
// console.log(fruits.length);

// fruits.pop();
// fruits.pop();
// // let poped=fruits.pop()
// // console.log(poped);
// console.log(fruits);

// let numbers=[1,2,3];
// const squared= numbers.map((num)=>{
//     return num*num;
// });

// console.log(squared)

// let numbers=[1,2,3,4,5,6];
// let even =numbers.filter(val=> val%2==0);
// console.log(even);
// let numbers=[1,2,3,4,5,6];
// let sum=numbers.reduce((current,accumulator)=>{
//     return current+accumulator;
// },0);
// console.log(sum);

// let numbers=[1,2,3,4,5,6];
// let mul=numbers.reduce((current,accumulator)=>{
//     return current*accumulator;
// },1);
// console.log(mul);