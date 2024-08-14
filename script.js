
let notesTitles = ['Ba','Aufgabe'];
let notes = [ 'Banana','Rasenmähen'];

let trashNotesTitles = [];
let trashNotes = [];

let achiveNotesTitles = [];
let achiveNotes = [];

let allNotes = {
    'notesTitles':['Ba','Aufgabe'],
    
}

function init() {    
    renderNotes();
    getFromLocalStorage();
    renderTrashNotes();
    renderAchiveNotes();
}



function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);    
    }    
    
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);    
    }    
    
}

function renderAchiveNotes() {
    let achiveContentRef = document.getElementById('achive_content');
    achiveContentRef.innerHTML = "";

    for (let indexAchiveNote = 0; indexAchiveNote < achiveNotes.length; indexAchiveNote++) {
        achiveContentRef.innerHTML += getAchiveNoteTemplate(indexAchiveNote);    
    }    
    
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = noteTitleInputRef.value;

    if (noteTitleInputRef.value != "") {
        notesTitles.push(noteTitleInput);
    }

    if (noteInputRef.value != "") {
        notes.push(noteInput);
    }
    
    saveToLocalStorage();

    renderNotes();
    renderAchiveNotes();
    renderTrashNotes();

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

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote,1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote,1);
    trashNotesTitles.push(trashNoteTitle[0]);
    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}

function achiveNote(indexNote) {
    let achiveNote = notes.splice(indexNote,1);
    achiveNotes.push(achiveNote[0]);
    let achiveNoteTitle = notesTitles.splice(indexNote,1);
    achiveNotesTitles.push(achiveNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}

function reActivateNote(indexNote) {
    let note = notes.splice(indexNote,1);
    notes.push(note[0]);
    let noteTitle = notesTitles.splice(indexNote,1);
    notesTitles.push(noteTitle[0]);
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}

function eraseNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote,1);
    trashNotesTitles.splice(indexTrashNote,1);
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}
