


const f1 = (str,cb) => cb(str);

let result = f1('supercalifragilisticexpialidocious',
    first => (first.replace(/c/g, '*c')).split('*')
    )
console.log(result)
console.log(" \n")

let result2 = f1('supercalifragilisticexpialidocious',
    second => {
        var result = `
        originalString:    ${second}, 
        modifiedString:    ${second.replace(/a/g, 'A')},
        numberReplaced:    ${(second.match(/a/g) || []).length},
        length:            ${second.length}`;
        return result;
    }
)
console.log(result2)


