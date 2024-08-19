
let allNotes = {
    'notesTitles':[],
    'notes':[],
    'trashNotesTitles':[],
    'trashNotes':[],
    'achiveNotesTitles':[],
    'achiveNotes':[],
}

function init() {    
    getFromLocalStorage();
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
        noteTitle.push(noteTitleInput);
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
    localStorage.setItem('notes', JSON.stringify(allNotes));
}

function getFromLocalStorage() {
    let myArray = JSON.parse(localStorage.getItem('allNotes.notes'));
    if (myArray == null) {
        allNotes.notes != myArray;
    } else {
        allNotes.notes = myArray;
    }
    
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote,1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + 'Titles'].splice(indexNote,1);
    allNotes[destinationKey + 'Titles'].push(noteTitle[0]);


    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
    
}

function eraseNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote,1);
    allNotes.trashNotesTitles.splice(indexTrashNote,1);

    renderNotes();
    renderTrashNotes();
    renderAchiveNotes();
}
