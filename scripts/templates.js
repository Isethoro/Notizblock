function getNoteTemplate(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">X</button><button onclick="achiveNote(${indexNote})">A</button></p>`;    
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onclick="eraseNote(${indexTrashNote})">X</button><button onclick="achiveNote(${indexTrashNote})">A</button></p>`;   
}

function getAchiveNoteTemplate(indexAchiveNote) {
    return `<p>+ title: ${achiveNotesTitles[indexAchiveNote]} -> ${achiveNotes[indexAchiveNote]} <button onclick="deleteNote(${indexAchiveNote})">X</button><button onclick="reActivateNote(${indexAchiveNote})">N</button></p>`;
}