class Page {
    constructor() {
        this.modules = [];
    }

    registerModule(module) {
        this.modules.push(module);
    }

    init() {
        this.modules.forEach(e=>e.init());
    }

    start() {
        window.addEventListener("load",e=>this.init());
    }
}

class Module {

}




let page = new Page();
page.registerModule(new ToDoModule(".todoList"));
page.start();