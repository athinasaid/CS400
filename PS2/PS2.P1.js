//get fibs
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}

function* evenFib () {
    myFibs = fibs();
    const count = [];
    while (count.length<6) {
        const temp = myFibs.next().value;
        if (temp%2 ==0){
            console.log(temp);
            count.push(temp);
        }
    }
}
const evenFibs = evenFib()
console.log(evenFibs.next().value)
