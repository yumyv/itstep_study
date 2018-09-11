window.addEventListener("load", function () {
    let contextMenu = document.querySelector(".contextMenu");
    let table = document.querySelector(".colorTable");

    let color = document.querySelector(".color");
    let selectColor = document.querySelector(".selectColor");
    let border = document.querySelector(".border");
    let selectBorder = document.querySelector(".selectBorder");


    table.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        contextMenu.classList.add("active");
        contextMenu.style.left = e.clientX + "px";
        contextMenu.style.top = e.clientY + "px";
    });

    table.addEventListener("click", function (e) {
        if (!e.target.matches("td")) return;
    });

    document.addEventListener("click", function (e) {
        if (!e.target.matches(".contextMenu") && !e.target.matches(".color") && !e.target.matches(".border")) {
            e.preventDefault();
            contextMenu.classList.remove("active");
            selectColor.classList.remove("active");
            selectBorder.classList.remove("active");
        }
    });

    color.addEventListener("click", function (e) {
        selectColor.classList.add("active");
        selectBorder.classList.remove("active");
    });

    border.addEventListener("click", function (e) {
        selectBorder.classList.add("active");
        selectColor.classList.remove("active");
    });

});