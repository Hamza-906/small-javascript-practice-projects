const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelector('.input-box');


const updateStorage = ()=> {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

const showNotes = ()=> {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

createBtn.addEventListener('click', ()=> {
  let inputBox = document.createElement('p');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  notesContainer.append(inputBox);

  let image = document.createElement('img');
  image.src = 'images/delete.png';
  inputBox.append(image);
});

notesContainer.addEventListener('click', (e)=> {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P'){
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = ()=> {
        updateStorage();
      }
    })
  }
});

document.addEventListener("keydown", event => {
  if (event.key === 'Enter') {
    event.preventDefault(); // stop default new <div> behavior

    const selection = window.getSelection(); // get the current selection (cursor position)
    if (!selection.rangeCount) return; // safety check

    const range = selection.getRangeAt(0); // get the active range (caret)
    const br = document.createElement("br"); // create a line break

    // Insert the <br> at the cursor position
    range.insertNode(br);

    // Move the cursor after the <br>
    range.setStartAfter(br);
    range.setEndAfter(br);

    // Collapse the range (place cursor after the <br>)
    selection.removeAllRanges();
    selection.addRange(range);
  }
});