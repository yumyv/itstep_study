jQuery(document).ready(function () {
    class Notes {
        constructor() {
            this.notes = [];
        }



        addNote (note) {
            this.notes.push(note);
        }
    }

    class Note {
        constructor (name, description) {
            this.name = name;
            this.description = description;
        }


    }

});