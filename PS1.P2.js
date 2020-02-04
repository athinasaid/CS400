
const arr = ['4+2', '5*7', '6-1', '9/2']

let expression = function(arr) {
    var output = [];
    for(var i = 0; i < arr.length; i++){
        var result;
        var ex = arr[i];
        let operator = function(ex) {
            var arr2 = ex.split('');
            var left = parseInt(arr2[0],10);
            var right = parseInt(arr2[arr2.length-1],10);
            var op = arr2[1];
            if (op == '%'){
                result = left % right;
            } else if (op == '+') {
                result = left + right;
            } else if (op == '-') {
                result = left - right;
            } else if (op == '*') {
                result = left * right;
            } else if (op == '/') {
                result = left / right;
            } else if (op == '%') {
                result = left % right;
            }

            return result;
        }
        output.push(operator(arr[i]));
        //console.log(`${arr[i]} = ${output}`)

    }

    return output;
}
console.log(`${arr} = ${expression(arr)}`)


