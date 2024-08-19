
let allNotes = {
    'notesTitles':['Ba','Aufgabe'],
    'notes':['Banana','Rasenmähen'],
    'trashNotesTitles':[],
    'trashNotes':[],
    'achiveNotesTitles':[],
    'achiveNotes':[],
}

function init() {    
    getFromLocalStorage();
    renderAllNotes();
}

function renderAllNotes() {
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);    
    }    
    
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);    
    }    
    
}

function renderAchiveNotes() {
    let achiveContentRef = document.getElementById('achive_content');
    achiveContentRef.innerHTML = "";

    for (let indexAchiveNote = 0; indexAchiveNote < allNotes.achiveNotes.length; indexAchiveNote++) {
        achiveContentRef.innerHTML += getAchiveNoteTemplate(indexAchiveNote);    
    }    
    
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = noteTitleInputRef.value;

    if (noteTitleInputRef.value != "") {
        allNotes.notesTitles.push(noteTitleInput);
    }

    if (noteInputRef.value != "") {
        allNotes.notes.push(noteInput);
    }
    
    saveToLocalStorage();
    renderAllNotes();

    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getFromLocalStorage() {
    let myArray = JSON.parse(localStorage.getItem('notes'));
    if (myArray == null) {
        notes != myArray;
    } else {
        notes = myArray;
    }
    
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote,1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + 'Titles'].splice(indexNote,1);
    allNotes[destinationKey + 'Titles'].push(noteTitle[0]);


    saveToLocalStorage();
    renderAllNotes();
    
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote,1);
    allNotes.trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote,1);
    allNotes.trashNotesTitles.push(trashNoteTitle[0]);


    saveToLocalStorage();
    renderAllNotes();
}

function achiveNote(indexNote) {
    let achiveNote = notes.splice(indexNote,1);
    allNotes.achiveNotes.push(achiveNote[0]);
    let achiveNoteTitle = notesTitles.splice(indexNote,1);
    allNotes.achiveNotesTitles.push(achiveNoteTitle[0]);

    renderAllNotes();
}

function reActivateNote(indexAchiveNote) {
    let note = allNotes.achiveNotes.splice(indexAchiveNote,1);
    allNotes.notes.push(note[0]);
    let noteTitle = achiveNotesTitles.splice(indexAchiveNote,1);
    allNotes.notesTitles.push(noteTitle[0]);

    renderAllNotes();
}

function eraseNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote,1);
    allNotes.trashNotesTitles.splice(indexTrashNote,1);
    
    renderAllNotes();
}
