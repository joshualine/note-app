const http = require("http");
const notes = require("./myModule/NoteClass")
const testFile = require("./data/testFile.json")



const server = http.createServer((req, res) => {

  if(req.url === '/' && req.method === 'GET') {
    notes.getAllNotes(res)
  } else if(req.url.match(/\/view\/\w+/) && req.method === 'GET') {
    const noteName = req.url.split('/')[2]
    notes.getOneNote(res, noteName)
  } else if(req.url === '/create' && req.method === 'POST') {
    notes.createNote(res, content)
  } else if(req.url === '/update' && req.method === 'PUT') {
    notes.updateNote(res, newContent)
  } else if(req.url === '/delete' && req.method === 'DELETE') {
    notes.deleteNote(res)
  } else if(req.url === '/rename' && req.method === 'POST') {
    notes.renameNote(res, oldName, newName)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found'}))

  }

  // if(req.url === '/read' && req.method === 'GET') {
  //   notes.getOneNote(res)
  //   } else {
  //     res.writeHead(404, { 'Content-Type': 'application/json' })
  //     res.end(JSON.stringify({ message: 'Route not found'}))
  // }

    // const content = "just a random bla blalalgk glggl"
    // if(req.url === '/create' && req.method === 'GET') {
    //   notes.createNote(res, content)
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'application/json' })
    //   res.end(JSON.stringify({ message: 'Route not found'}))
    // }

    // if(req.url === '/update' && req.method === 'GET') {
    //   notes.createNote(res, content)
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'application/json' })
    //   res.end(JSON.stringify({ message: 'Route not found'}))
    // }

    // const name = 'testFile'
    // if(req.url === '/delete' && req.method === 'GET') {
    //   notes.deleteNote(res, name)
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'application/json' })
    //   res.end(JSON.stringify({ message: 'Route not found'}))
    // }


    // const oldName = 'testFile3'
    // const newName = 'testFile1'
    // if(req.url === '/rename' && req.method === 'GET') {
    //   notes.renameNote(res, oldName, newName)
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'application/json' })
    //   res.end(JSON.stringify({ message: 'Route not found'}))
    // }

    






  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello world</h1>');
  // res.end();
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server running on port ${PORT}`))



// // Write 'hello, ' and then end with 'world!'.
// const fs = require('fs');
// const file = fs.createWriteStream('example.txt');
// file.write('hello, ');
// file.end('world!');
// // Writing more now is not allowed!
// @since — v0.9.4