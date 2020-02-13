
//us regular expresison on replace, take str and replace the 'c' with '*c' and split on *

// let funcs = [];
// for (var num=0; num<4; num++) {
//     funcs.push(
//         () => console.log(`Num: ${num}`)
//     )
// }
// funcs[2];

// const doEval = (str) => (someString) => (someString).split('').reverse().join('').toUpperCase()
// let foo = doEval('8+2')('8+2')
// console.log(foo)

// const strings = ['8+2', '3-4'];
// const evals = strings.map(value => doEval(value))
// console.log(evals)


//P2 use switch
//P3 use /a/g and put it all in one const


var str = "Is this all there is?"
var patt1 = /is/g
console.log(patt1)








//do not use var and do not use eval() EVER!!!

const p1 = str => str.split('').sort().join('')
console.log(`PS1: ${p1('supercalifragilisticexpialidocious')}`)

const p2 = expression => {
    const operator = expression.charAt(1);
    switch (operator) {
        case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
        case '%': return (expression) => Number(expression.charAt(0)) % Number(expression.charAt(2));
    }
}

console.log(`p2(8*4): ${p2('8*4')('8*4')}`)

const p3 = (str, func) => func(str)
const p31 = p3('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, '*c').split('*') //bit stuffing => we need the c so we hide it and unhide it again; replace() returns a new string back

)

console.log(`p31: ${p31}`)

const p32 = str => {
    const stringData = {
        originalString : str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.match(/a/g).length,
        originaLength: str.length
    }
    return stringData;
}
console.log(p32('supercalifragilisticexpialidocious'))

//iterators
const anArray = [1,2,3];
const arrayIterator = anArray[Symbol.iterator]();
let val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);
val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);
val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);
val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);

//generators --> an iterator that you can pause
function* listGen () {
    yield 1;    //yield --> to spit out
    yield 2;
    yield 3;
}
const x = listGen();
console.log(`${x}`)
//let returnVal = x.next();
// console.log(`${returnVal.value}, ${returnVal.done}`)
// console.log(`${returnVal.value}, ${returnVal.done}`)
// returnVal = x.next();
// console.log(`${returnVal.value}, ${returnVal.done}`)

let returnVal = x.next();
while (!returnVal.done) {
    console.log(`${returnVal.value}, ${returnVal.done}`);
    returnVal = x.next();
}

const y = listGen();
console.log(...y);

//generators that field via expression
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}
//Get a few fibs
myFibs = fibs()
let count = 5;
while (count --> 0) { //decrement count until count goes to 0
    console.log(myFibs.next().value)
}