window.addEventListener("DOMContentLoaded", function () {
   let element = document.querySelector(".element");
   let activePoint;

    function mouseInElement(elem,x,y){
        let rect = elem.getBoundingClientRect();
        return x>=rect.left && x<=rect.right && y>=rect.top && y<=rect.bottom;
    }

    function setActivePosition(mouseX,mouseY){
        let rect = element.getBoundingClientRect();
        let w = activePoint.offsetWidth;
        let h = activePoint.offsetHeight;
        activePoint.style.left = mouseX-rect.left-w/2+"px";
        activePoint.style.top = mouseY-rect.top-h/2+"px";
    }


   element.addEventListener("mousedown",function (e) {
       if (e.target.matches(".element")) {
           let rect = element.getBoundingClientRect();
           if (e.target.rect) 
       }
   });

    element.addEventListener("mousemove",function (e) {
        if(activePoint!=null){
            setActivePosition(e.clientX,e.clientY);
        }
    });

});