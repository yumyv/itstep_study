function str_replace(str, from, to) {
    let i = 0;
    do {
        str.splice(str.indexOf(from),from.length,to);
        str.splice(str.indexOf(from,from.length),from.length,to);
        i++;
    } while (i < str.length)
}


let st = "hello world, hello people";
console.log(st.indexOf("hello"));
console.log(st.splice(st.indexOf(2,3)));


let s = str_replace("hello world, hello people", "hello", "good by");

console.log(s);



