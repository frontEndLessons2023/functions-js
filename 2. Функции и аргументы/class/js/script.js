function f1(a, b, c){

}

sum3(1000, 2000);

function sum(){
    const x = 5;
    const y = 6;
    console.log(x + y);
}

sum();

let x = 55;
let y = 66;

function sum2(){
    console.log(x + y);
}

sum2();
x = 100;
y = 200;
sum2();


function sum3(x1 = 1, y1 = 1){
    console.log(x1 + y1);
}

sum3(44, 11);
sum3(100, 200);
let z = 77;
sum3(z, 10);
sum3(z, z*2);
sum3();


function showSum(elem, x, y){
    document.querySelector(elem).textContent = x + y;
}

showSum('.out-1', 5, 6);

function showSum2(elem, x, y){
    elem.textContent = x + y;
}
const out2 = document.querySelector('.out-2');
showSum2(out2, 7, 6)

function showSum3(x, y, elem = '.out-1'){
    console.log(arguments);//array of arguments
    document.querySelector(elem).textContent = x + y;
}

showSum3(10, 10);


function showSumAll(){
    //arguments like array but not array, so array methods doesn't work with it
    console.log(arguments);
    // let sum = 0;
    // for(let i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    let sum = Array.from(arguments).reduce((res, cur) => res += cur)
    console.log('sum: ' + sum);
}

showSumAll(4, 5, 6, 10, 15);

function showSumAll2 (...args){
    console.log(args)
    let sum = args.reduce((res, cur) => res += cur)
    console.log('sum: ' + sum);
}

//*************Function as argument */

function showAll(res){
    document.querySelector('.out-1').innerHTML = `<b>${res}<b>`
}

function showSumAll3(drawFunction, ...num){
    drawFunction(num);
}

showSumAll3(showAll, 55, 44, 33);





