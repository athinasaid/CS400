// Write a generator that is initialized with a sentence and that emits each word of the sentence in
// turn.
//     Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”.

function* P2 (arg = "nothing hi") {
    arr = arg.split(" ");
    while(arr.length!=0){
        result =  arr.shift();
        yield result;
    }
}

const ex = P2("All I know is something like a bird within her sang")
let val = ex.next();
while(!val.done){
    console.log(val.value);
    val = ex.next();
}


