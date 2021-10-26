class Note {
  constructor() {
    this.fs = require('fs')
    this.headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      // 'Access-Control-Allow-Headers': '*',
      // "Access-Control-Max-Age": 86400
    }
    
  }

  // Get all the available notes
  getAllNotes(res) {
    this.fs.readdir('data', (err, files) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'Files Retrieved:', data:files };
        res.end(JSON.stringify(json));
      }
    }) 
  }

  // Displays the content of the selected note
  getOneNote(res, noteName) {
    this.fs.readFile(`data/${noteName}.txt`, 'utf-8', (err, data) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'Files Retrieved:', data:data };
        res.end(JSON.stringify(json));
      }
    }) 
  }

  // Creates a note
  createNote(res, noteName, noteContent) {
    this.fs.writeFile(`data/${noteName}.txt`, noteContent, (err) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'File Created', data:{noteName:noteName,noteContent:noteContent} };
        res.end(JSON.stringify(json));
      }
    }) 
  }

  // Update a selected note
  updateNote(res, noteName, noteContent) {
    this.fs.writeFile(`data/${noteName}.txt`, noteContent, (err) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'File Created', data:{noteName:noteName,noteContent:noteContent} };
        res.end(JSON.stringify(json));
      }
    }) 
  }

  // delete a selected note
  deleteNote(res, noteName) {
    this.fs.unlink(`data/${noteName}.txt`, (err) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'File Deleted' };
        res.end(JSON.stringify(json));
      }
    }) 
  }

  // rename a selected note
  renameNote(res, oldName, newName) {
    this.fs.rename(`data/${oldName}.txt`, `data/${newName}.txt`, (err) => { 
      res.writeHead(200, this.headers);
      if (err) {
        let json = { status:false, message: 'It seems there is a mistake somewhere' };
        res.end(JSON.stringify(json));
      }else {
        let json = { status:true, message:'File renamed' };
        res.end(JSON.stringify(json));
      }
    }) 
  }
}

const noteClass = new Note;
module.exports = noteClass;