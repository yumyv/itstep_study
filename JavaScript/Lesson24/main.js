let str = "shops  127.0.0.1 -u vasia -p 0000";

let rexpBase = /e/g;
let rexpHost = /(?<=-h)\s*\S*/g;//done
let rexpUser = /(?<=-u)\s*\w*/g;//done
let rexpPass = /(?<=-p)\s*\w*/g;//done


function addRegexp(rexp, str) {
    let arr = [];
    let i;
    while ((i = rexp.exec(str)) != null) {
        arr.push(i[0]);
    }

    return arr;
}

function hasNull(rexp,con) {
    if (rexp===null) return con;
}

class List {
    constructor(base, host, user, password) {
        this.base = base;
        this.host = host;
        this.user = user;
        this.password = password;
    }
}


let addHost = addRegexp(rexpHost, str);
console.log(addHost);
let addUser = addRegexp(rexpUser, str);
let addPass = addRegexp(rexpPass, str);
let hasHost = hasNull(addHost,"localhost");
hasNull(addUser);
hasNull(addPass);


let list = new List("demo", addHost, addUser, addPass);

console.log(list);

