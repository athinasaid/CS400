
function br(x) {
    var arr = [];
    var temp = '';
    for (var i = 0; i < x.length; i++){
        var y = x[i];
        var comp = y.localeCompare('c');

        if (comp == 0){
            arr.push(temp);
            temp = '';
            temp = temp + x[i];
        } else {
            temp = temp + x[i];
        }
    }
    arr.push(temp);
    temp = '';
    return arr;
}

function all(x) {
    var ori = x;
    var mod = '';
    var numRep = 0;
    var len;

    for (var i = 0; i < x.length; i++){
        if (x[i].localeCompare('a')==0) {
            mod = mod + 'A';
            numRep++;
        } else {
            mod = mod + x[i];
        }
    }
    len = mod.length;
    var result = '{\n' +
        `originalString:    ${ori}, \n` +
        `modifiedString:    ${mod}, \n` +
        `numberReplaced:    ${numRep}, \n` +
        `length:    ${len} \n` +
        `}`;
    return result;

}

const f1 = (str,cb) => cb(str);

let result = f1('supercalifragilisticexpialidocious',
    first => br(first)
    )
console.log(result)
console.log(" \n")

let result2 = f1('supercalifragilisticexpialidocious',
    second => all(second)
)
console.log(result2)


