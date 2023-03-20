//function declaration
function testFunction(){
    const x = 5;
    const y = 10;
    console.log(x + y);
}

function hello(){
    testFunction();
    console.log('Hello');
}

hello();
//testFunction();
testFunction2();
//t3();//reference error

function testFunction2() {
    function t3(){
        console.log('t3 function');
    }
    t3();
    console.log('test function 2');
}

function unixTime(){
    let time = Math.floor(new Date().getTime());
    console.log(time);
}

unixTime();
unixTime();


let min = 300;
let max = 350;

//function randomInt(){//will be overriden by the same func below
function rand(){
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

randomInt();

function randomInt(){//will work only this with all same name functions call
    console.log('random int 555');
}

randomInt();
randomInt();

rand();

min = 5;
max = 15;

let c = 9;
function count(){
    c++;
    console.log(c)
}
 
count();
count();

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);
//document.querySelector('.out-1').onclick = count;

let w = 100;
function blockWidth(){
    w++;
    document.querySelector('.out-1').style.width = w + 'px';
}






