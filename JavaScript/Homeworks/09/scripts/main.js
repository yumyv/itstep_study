function str_replace(str, from, to) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === from) arr[i] = to;
    }
    let newStr = arr.join(" ");
    return newStr;
}

let s = str_replace("hello world, hello people", "hello", "good by");
console.log(s);


function str_replace_indexOf(str, from, to) {
    let wasWord = str.slice((str.indexOf(from)), from.length);
    let nowWord = str.slice((str.indexOf(to)), to.length);

    let buf = str.slice(str.indexOf(from), from.length);
    return str

}

let sIndexOf = str_replace_indexOf("hello world, hello people", "hello", "good by")

//console.log(sIndexOf);

