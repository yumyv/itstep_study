window.addEventListener("load", function () {
    let bubble = document.querySelector(".bubble");
    let container = document.querySelector("main");
    let startPosition = bubble.offsetTop;
    let endPosition = container.offsetHeight - bubble.offsetHeight;


    function animate(startvalue, endvalue, time, onframe) {
        let frames = time / 40;
        let step = (endvalue - startvalue) / frames;
        let up = endvalue > startvalue;
        let inter = setInterval(function () {
            startvalue += step;
            if ((startvalue >= endvalue)) {
                clearInterval(inter);
                startvalue = endvalue;
            }
            onframe(startvalue);
        }, 20);
    }


    function moveBubble(elem) {
        animate(startPosition, endPosition, 2000, function (v) {
            elem.style.marginTop = v + "px";
        });
    }

    bubble.addEventListener("click", function (e) {
            moveBubble(bubble);
    })


});
