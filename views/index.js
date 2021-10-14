// selectors
// let listNotes = document.getElementById('#listNotes')
const btn = document.getElementById('btn')



// Event listeners
btn.addEventListener('click', loadNotes);

// let url = 'http://127.0.0.1:5000/';  https://api.github.com/users



function loadNotes(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:5000/', true);
  // xhr.open('GET', 'https://api.github.com/users', true);

  xhr.onload = function() {
    if(this.status == 200) {
      let listNotes = JSON.parse(this.responseText)

      // console.log(listNotes)
      // let listNotesOutput = '';
      for(let oneNote in listNotes) {
        console.log(listNotes[oneNote])
      //   listNotesOutput += `
      //     <div class="listNote">
      //       <ul>
      //         <li>${listNotes[oneNote]}</li>
      //       </ul>
      //     </div>
      //   `
      }
      // document.getElementById('listNotes').innerHTML = listNotesOutput;
    }
  }

  xhr.send();

//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && this.status == 200){
//           document.getElementById('listNotes').innerHTML = xhr.responseText;
//       }
//   };
//   xhr.open('GET', 'https://api.github.com/users', true);
//   xhr.send();
}

