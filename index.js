const http = require("http");
const fs = require("fs")
const testFile = require("./data/testFile.json")



const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(testFile))

  // if(req.url === '/read' && req.method === 'GET') {
  //   fs.readdir('data', (err, files) => { 
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     if (err) {
  //       let json = { status:false, message: 'It seems there is a mistake somewhere' };
  //       res.end(JSON.stringify(json));
  //     }else {
  //       let json = { status:true, message:'Files Retrieved:', data:files };
  //       res.end(JSON.stringify(json));
  //     }
  //   }) 
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'application/json' })
  //   res.end(JSON.stringify({ message: 'Route not found'}))
  // }

  // if(req.url === '/read' && req.method === 'GET') {
  //   fs.readFile('data/testFile.txt', 'utf-8', (err, files) => { 
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     if (err) {
  //       let json = { status:false, message: 'It seems there is a mistake somewhere' };
  //       res.end(JSON.stringify(json));
  //     }else {
  //       console.log(files)
  //       let json = { status:true, message:'Files Retrieved:', data:files };
  //       res.end(JSON.stringify(json));
  //     }
  //   }) 
  //   } else {
  //     res.writeHead(404, { 'Content-Type': 'application/json' })
  //     res.end(JSON.stringify({ message: 'Route not found'}))
  // }

    const files = "a new text for testing something i am building"
    // if(req.url === '/read' && req.method === 'GET') {
    //   fs.writeFile('data/testFile2.txt', files, (err) => { 
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     if (err) {
    //       let json = { status:false, message: 'It seems there is a mistake somewhere' };
    //       res.end(JSON.stringify(json));
    //     }else {
    //       console.log(files)
    //       let json = { status:true, message:'File Created', data:files };
    //       res.end(JSON.stringify(json));
    //     }
    //   }) 
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'application/json' })
    //   res.end(JSON.stringify({ message: 'Route not found'}))
    // }

    if(req.url === '/delete' && req.method === 'GET') {
      fs.unlink('data/testFile2.txt', (err) => { 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (err) {
          let json = { status:false, message: 'It seems there is a mistake somewhere' };
          res.end(JSON.stringify(json));
        }else {
          let json = { status:true, message:'File Deleted' };
          res.end(JSON.stringify(json));
        }
      }) 
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Route not found'}))
    }

    if(req.url === '/rename' && req.method === 'GET') {
      fs.rename('data/testFile.txt', 'data/testFileMain.txt', (err) => { 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (err) {
          let json = { status:false, message: 'It seems there is a mistake somewhere' };
          res.end(JSON.stringify(json));
        }else {
          let json = { status:true, message:'File Renamed' };
          res.end(JSON.stringify(json));
        }
      }) 
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Route not found'}))
    }






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