const http = require("http");
const url = require('url')
const notes = require("./controllers/Notes")



const server = http.createServer((req, res) => {

  if(req.url === '/' && req.method === 'GET') {
    
    notes.getAllNotes(res)
  } else if(req.url.match(/\/view\/\w+/) && req.method === 'GET') {
    const noteName = req.url.split('/')[2]
    notes.getOneNote(res, noteName)
  } else if(req.url === '/create' && req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      let noteName = JSON.parse(data).name;
      let content = JSON.parse(data).content;
      notes.createNote(res, noteName, content)
      res.end();
    })
  } else if(req.url === '/update' && req.method === 'PUT') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      let noteName = JSON.parse(data).name;
      let newContent = JSON.parse(data).content;
      notes.updateNote(res, noteName, newContent)
      res.end();
    })
    
  } else if(req.url === '/delete' && req.method === 'DELETE') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      let noteName = JSON.parse(data).name;
      notes.deleteNote(res, noteName)
      res.end();
    })
    
  } else if(req.url === '/rename' && req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      let oldName = JSON.parse(data).name;
      let newName = JSON.parse(data).newName;
      notes.renameNote(res, oldName, newName)
      res.end();
    })
    
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found'}))

  }


});


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server running on port ${PORT}`))
