function f(str,n) {
    var s = "";
    for (let i in str) {
        s += String.fromCharCode(str.charCodeAt(i)+n);
    }
    return s;
}

//console.log(f("hello",5));

function countWord(str,word) {
    var start = 0;
    var count = 0;
    while (true) {
        var pos = str.indexOf(word,start);
        if (pos === -1) break;
        start = pos + word.length;
        count++;
    }
    return count;
}

function countWord2(str,word) {
    return str.split(word).length-1;
}

console.log(countWord2("hello word, sadsas , hello , dfwewe", "hello"));
