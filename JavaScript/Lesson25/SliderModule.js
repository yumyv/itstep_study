class SliderModule extends Module{


    constructor(selector,autoscrolltime=0,autostop=true) {
        super(selector);
        this.autoscrolltime = autoscrolltime;
        this.autostop = autostop;
        this.paused = false;
        this.isAnim = false;
    }

    /*Override*/
    onComponentsLoading() {
        this.slideWrapper = this.get(".slider-wrapper");
        this.leftArrow=this.get(".slider-arrow-left");
        this.rightArrow=this.get(".slider-arrow-right");
        this.switcher = this.get(".switcher");
    }

    /*Override*/
    onBindEvents() {
        this.rightArrow.addEventListener("click",()=>this.animateLeft());
        this.leftArrow.addEventListener("click",()=>this.animateRight());
        this.container.addEventListener("mouseenter",()=>this.paused = this.autostop);
        this.container.addEventListener("mouseleave",()=>this.paused = false);
    }

    /*Override*/
    onCreate() {
        if(this.autoscrolltime>0) setInterval(()=>{
            if(this.paused) return;
            this.animateLeft();
        },this.autoscrolltime);

        //My code
        let countSliderChildren = this.slideWrapper.children.length;
        let i;
        while (i <= countSliderChildren) {
            this.switcher.createElement("div")
        }
    }

    animateLeft(onend){
        if(this.isAnim) return;
        this.isAnim = true;
        this.animate(0,-100,1000,(value)=> {
            this.slideWrapper.style.marginLeft = value+"%";
        },()=>{
            this.slideWrapper.appendChild(this.slideWrapper.firstElementChild);
            this.slideWrapper.style.marginLeft = "";
            if(onend) onend();
            this.isAnim = false;
        })
    }

    animateRight(onend) {
        if(this.isAnim) return;
        this.isAnim = true;
        this.slideWrapper.style.marginLeft = "-100%";
        this.slideWrapper.insertBefore(this.slideWrapper.lastElementChild,this.slideWrapper.firstElementChild);
        this.animate(-100,0,1000,(value)=> {
            this.slideWrapper.style.marginLeft = value+"%";
        },()=>{
            if(onend) onend();
            this.slideWrapper.style.marginLeft="";
            this.isAnim = false;
        })
    }



    animate(startvalue,endvalue,time,onframe,onend){
        const FRAME_TIME = 15;
        let frames = time/FRAME_TIME;
        let step = (endvalue-startvalue)/frames;

        let up = endvalue>startvalue;

        let inter = setInterval(function(){
            startvalue+=step;
            if((up&&startvalue>=endvalue)||(!up && startvalue<=endvalue)){
                clearInterval(inter);
                startvalue=endvalue;
            }
            onframe(startvalue);
            if(startvalue === endvalue && onend) onend();
        },FRAME_TIME);
    }
}



/*
HTML-structure:
<div class="slider">
        <div class="slider-arrow slider-arrow-left"></div>
        <div class="slider-arrow slider-arrow-right"></div>
        <div class="slider-wrapper">
            <div class="slider-slide">1</div>
            <div class="slider-slide">2</div>
            <div class="slider-slide">3</div>
        </div>
</div>
CSS-code:
*/