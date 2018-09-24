function str_replace(str, from, to) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === from) arr[i] = to;
    }
    return arr.join(" ");
}

let s = str_replace("hello world, hello people", "hello", "good by");
console.log(s);

//not ready
function str_replace_indexOf(str, from, to) {
    for (let i = 0; i < str.length; i++) {
        let st1 = str.slice(i, str.indexOf(from));
        let fromLength = from.length + str.indexOf(from);
        let st2 = str.slice(fromLength);
        var st3 = st1 + to + st2;
    }
    return st3;
}

let sIndexOf = str_replace_indexOf("hello world, hello people", "hello", "good by");
console.log(sIndexOf);

