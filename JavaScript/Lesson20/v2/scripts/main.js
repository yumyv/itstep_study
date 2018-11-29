class Module{
    constructor(selector){
        this.selector = selector;
    }
    get(selector){
        return this.container.querySelector(selector);
    }
    init(){
        this.container = document.querySelector(this.selector);
        this.loadComponents();
        this.bindEvents();
        this.onCreate();
    }
    loadComponents(){}
    bindEvents(){}
    onCreate(){}
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
        window.addEventListener("load",()=>this.init());
    }
}
//---------------------------TODO_APPLICATION----------------------
class Note{
    constructor(name,text){
        this.name = name;
        this.text = text;
    }
    asElem(){
        let note = document.createElement("div");
        note.className="note";
        let text = document.createElement("div");
        text.className="text";
        text.innerText = this.text;
        let name = document.createElement("div");
        name.className="name";
        name.innerText = this.name;
        note.appendChild(name);
        note.appendChild(text);
        return note;
    }
}
class NoteManager{
    constructor(){
        this.notes = [];
    }
    addNote(note){
        this.notes.push(note);
    }
    getAll(){
        return this.notes;
    }
    remove(index){
        this.notes.splice(index,1);
    }
    toStorage() {
        let str = JSON.stringify(this.notes);
        window.localStorage.setItem("value",str);
    }
}
class NotesModule extends Module{
    constructor(selector) {
        super(selector);
        this.noteManager = new NoteManager();
        this.noteManager.toStorage();
    }
    loadComponents() {
        this.notelist = this.get(".list");
        this.noteNameInp = this.get(".notename");
        this.noteTextInp = this.get(".notetext");
        this.addNoteBtn = this.get(".addBtn");
    }
    bindEvents() {
        this.addNoteBtn.addEventListener("click",e=>this.addNote());
        this.notelist.addEventListener("click",e=>{
            if(e.target.closest(".note")) this.removeNote(e.target.closest(".note").dataset.index);
        })
    }
    onCreate() {
        this.updateView();
    }
    addNote(){
        let note = new Note(this.noteNameInp.value,this.noteTextInp.value);
        this.noteManager.addNote(note);
        this.updateView();
    }
    updateView(){
        this.notelist.innerHTML="";
        this.noteManager.getAll().forEach((note,i)=>{
            let noteElem = note.asElem();
            noteElem.dataset.index = i;
            this.notelist.appendChild(noteElem)
        });
    }
    removeNote(index) {
        this.noteManager.remove(index);
        this.updateView();
    }
}
let page = new Page();
page.registerModule(new NotesModule(".notes"));
page.start();
