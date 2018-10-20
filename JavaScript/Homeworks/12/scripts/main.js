window.addEventListener("load", function () {

    let list = document.querySelector(".list");
    let add = document.querySelector(".add");
    let del = document.querySelector(".del");

    add.addEventListener("click", function () {
        let inputText = document.querySelector(".inputText").value;
        let listElem = document.createElement("p");
        listElem.classList.add("listElem");
        listElem.innerHTML = inputText;
        list.appendChild(listElem);
    });

    list.addEventListener("click", function () {
        if (list.target) alert("hello");
    })


});