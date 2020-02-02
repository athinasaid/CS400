//Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
// your function using the string ‘supercalifragilisticexpialidocious’.

const allLetters = function(str) {
    var arr = str.split(''); //spliting the string into an array in order to iterate
    var temp;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            //if ASCII code is greater, then swap
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join(''); //putting it back to a string
}

console.log(`${allLetters("‘supercalifragilisticexpialidocious’")}`);