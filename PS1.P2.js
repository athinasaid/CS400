
const doEval = (str) => (someString) => {
    var text;
    var x = (someString).split('')
    var op = x[1];
    switch(op) {
        case "+":
            var result = parseInt(x[0],10) + parseInt(x[2],10);
            text = `${someString} = ${result} `;
            break;
        case "-":
            var result = parseInt(x[0],10) - parseInt(x[2],10);
            text = `${someString} = ${result} `;
            break;
        case "*":
            var result = parseInt(x[0],10) * parseInt(x[2],10);
            text = `${someString} = ${result} `;
            break;
        case "/":
            var result = parseInt(x[0],10) / parseInt(x[2],10);
            text = `${someString} = ${result} `;
            break;
        case "%":
            var result = parseInt(x[0],10) % parseInt(x[2],10);
            text = `${someString} = ${result} `;
            break;
    }
    return text;
}
var y = ['4+2', '5*7', '6-1', '9/2'];
let foo = y.map(doEval())
console.log(foo)



