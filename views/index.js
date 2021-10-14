// selectors
let filterInput = document.getElementById('searchNotes')
// let filterValue = document.getElementById('searchNotes').value.toUpperCase();


let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://127.0.0.1:5000/', true);

xhr.onload = function() {
  if(this.status == 200) {
    let listNotes = JSON.parse(this.responseText)

    const checkListNotes = listNotes.data
    // console.log(checkListNotes)
    let listNotesOutput = '';
    for(let oneNote of checkListNotes) {
      // console.log(oneNote)
      listNotesOutput += `
        <div class="listOfNotes" id="listOfNotes">
          <h4 class="notes-collection" id="notes-collection">
            ${oneNote}
            <button class="btn btn-outline-dark" id="btnRead">Read</button>
            <button class="btn btn-outline-dark" id="btnEdit">Edit</button>
            <button class="btn btn-outline-dark" id="btnDelete">Delete</button>
          </h4>
        </div>
      `
      
    }
    document.getElementById('listNotes').innerHTML = listNotesOutput;
    // console.log(listNotesOutput)
    filterInput.addEventListener('keyup', filterNotes);

    
    function filterNotes() {
      let filterValue = document.getElementById('searchNotes').value.toUpperCase();
      // console.log(filterValue)
      let div = document.getElementsByClassName('listOfNotes');
      // console.log(div)
      for(let i = 0; i<div.length; i++) {
        let h4 = div[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          div[i].style.display = '';
        } else {
          div[i].style.display = 'none';
        }
      }


    }
  }
}

xhr.send();





// Event listeners







function loadNotes(){
  
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && this.status == 200){
//           document.getElementById('listNotes').innerHTML = xhr.responseText;
//       }
//   };
//   xhr.open('GET', 'https://api.github.com/users', true);
//   xhr.send();
}

