function f1(x, y){
    return x + y;
}

let r1 = f1(2, 2);
console.log(r1);
console.log(5 + f1(10, 10));

function randInt(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let r2 = randInt(10, 100);
console.log(r2);
console.log(randInt(222, 333) + 100);

console.log(100, 200);
document.querySelector('.out-1').innerHTML = f1(300, 200);
//document.querySelector('.out-1').style.background = 'rgb(23, 156, 201)';
document.querySelector('.out-1').style.background = 
`rgb(${randInt(0, 155)}, ${randInt(0, 155)}, ${randInt(0, 155)})`;
//alert(f1(2, 5));
console.log(100 * f1(3, 4));

//***************** */
document.querySelector('.b-3').addEventListener('click',
function () {
    const s = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = 'Hello ' + s;
    console.log('Hello ' + clearText(s));
});

function clearText(data){
    return data.trim().toLowerCase();
}

function indexOfEmul(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            return i;
        }
    }
    return -1;
}

let r3 = indexOfEmul([22, 33, 44, 55], 44);
console.log(r3);

/***************************** */
document.querySelector('.b-4').addEventListener('click', 
function(){
    let year = +document.querySelector('.i-4').value;
    if(isNaN(year)) return;
    if(year <= 0 || year > 140) return;
    document.querySelector('.out-4').innerHTML = 2023 - year;
});

/****************************** */
console.log('************************');
const arr5 = [[3, 4, 5], [6, 7, 8]];
function t5(){
    let s = 0;
    for(let i = 0; i < arr5.length; i++){
        s += sum(arr5[i]);
    }
    return s;
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(t5());
console.log('************************');

const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]];
const evenArr7 = arr7.filter(function(item) {
    return (sum(item) % 2 === 0);
});

console.log(evenArr7)
console.log('************************');

function t8(){
    return sum;
}

console.log(t8())








