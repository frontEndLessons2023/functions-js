//var-1 regular function
function sum(a, b){

    return a + b;
}
function multi(a, b){

    return a * b;
}
//var-2 annonimus function
document.querySelector('.b-1').addEventListener('click', function(){
    let res = sum(23, 45);
    console.log(res);
});
//var-3 arrow => function; arrow function same as annonimus function
//but shorter version of it
document.querySelector('.b-2').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
});
//***work */
//call two functions
// document.querySelector('.b-3').addEventListener('click', function(){
//     let res = sum(23, 45);
//     console.log(res);
//     let res2 = multi(23, 45);
//     console.log(res2);
// });
//***work */
document.querySelector('.b-3').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

//callback
const ar1 = [4, 5, 6, 7, 8];

//option-1
function pow2(a){
    return a**2;
}
const res1 = ar1.map(pow2);
console.log(res1);

//option-2
const res3 = ar1.map(function(a){
    return a**2;
})
console.log(res3);
//option-3
const res4 = ar1.map((a) => {
    return a**2;
});
console.log(res4);
//option-4
const res5 = ar1.map(a => a**2);
console.log(res5);
/******************************** */
//1
const res6 = ar1.filter(function(item, index){
    if(index % 2 === 0){
        return true;
    }
});
console.log(res6);
//2
const res7 = ar1.filter((item, index) => {
    if(index % 2 === 0){
        return true;
    }
});
console.log(res7);
//3
const res8 = ar1.filter((item, index) => index % 2 === 0);
console.log(res8);

//arrow & this
//1
document.querySelector('.b-4').addEventListener('click', function(){
    console.log(this);
});
//2 this in arraw function is global -> taking this from window
document.querySelector('.b-4').addEventListener('click', () => {
    console.log(this);
});

//arrow & arguments
const f1 = (...arg) => {
    //console.log(arguments);//not work
    console.log(arg)
    console.log('work');
}
f1(99, 100);









