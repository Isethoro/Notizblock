function getNoteTemplate(indexNote) {
    return `<p>+ title: ${allNotes.notesTitles[indexNote]} -> ${allNotes.notes[indexNote]} <button onclick="moveNote(${indexNote},'notes','trashNotes')">X</button><button onclick="moveNote(${indexNote},'notes','achiveNotes')">A</button></p>`;    
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${allNotes.trashNotesTitles[indexTrashNote]} -> ${allNotes.trashNotes[indexTrashNote]} <button onclick="eraseNote(${indexTrashNote})">X</button><button onclick="moveNote(${indexTrashNote},'trashNotes','achiveNotes')">A</button></p>`;   
}

function getAchiveNoteTemplate(indexAchiveNote) {
    return `<p>+ title: ${allNotes.achiveNotesTitles[indexAchiveNote]} -> ${allNotes.achiveNotes[indexAchiveNote]} <button onclick="moveNote(${indexAchiveNote},'achiveNotes','trashNotes')">X</button><button onclick="moveNote(${indexAchiveNote},'achiveNotes','notes')">N</button></p>`;
}