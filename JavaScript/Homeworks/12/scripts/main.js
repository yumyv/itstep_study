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

    list.addEventListener("click", function (e) {
        if (!e.target.matches(".list")) {
            if (e.target.matches(".active"))
                e.target.classList.remove("active");
            else e.target.classList.add("active");
        }
    });

    del.addEventListener("click", function () {
        while (list.firstChild)
            list.removeChild(document.querySelector(".active"));
    });

    //////for delete use "D" key
    document.addEventListener("keypress", function (e) {
        let keyCode = e.keyCode;
        if (keyCode === 100) {
            while (list.firstChild)
                list.removeChild(document.querySelector(".active"));
        }
    })

});