// selectors
// let listNotes = document.getElementById('#listNotes')
const btn = document.getElementById('btn')



// Event listeners
btn.addEventListener('click', loadNotes);

// let url = 'http://127.0.0.1:5000/';  https://api.github.com/users

function loadNotes(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:5000/', true);

  xhr.onload = function() {
    if(this.status == 200) {
      let listNotes = JSON.parse(this.responseText)

      console.log(listNotes)
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

