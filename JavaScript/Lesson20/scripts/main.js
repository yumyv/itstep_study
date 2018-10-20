class Module{
    constructor(selector){
        this.selector = selector;
    }
    get(selector){
        return this.container.querySelector(selector);
    }
    init(){
        this.container = document.querySelector(this.selector);
    }
}
class Page{
    constructor(){
        this.modules=[];
    }
    registerModule(module){
        this.modules.push(module);
    }
    init(){
        this.modules.forEach(m=>m.init())
    }
    start(){
        window.addEventListener("load",e=>this.init());
    }
}
class SaveModule extends Module{
    init() {
        super.init();
        this.saveField = this.get(".saveField");
        this.saveBtn = this.get(".addBtn");
        this.loadData();
        this.bindEvent();
    }
    bindEvent(){
        this.saveBtn.addEventListener("click",e=>this.saveData());
    }
    loadData(){
        let value = window.localStorage.getItem("value");
        if(value===null) return;
        this.saveField.value = value;
    }
    saveData() {
        let show = document.querySelector(".show");
        let input = "<p>" + this.saveField.value + "</p>";
        show.innerHTML += input;
        window.localStorage.setItem("value",this.saveField.value);
    }
}


let page = new Page();
page.registerModule(new SaveModule(".container"));
page.start();