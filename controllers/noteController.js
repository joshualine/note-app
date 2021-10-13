// const Notes = require('../models/noteModel')


// async function getOneNote(req, res) {
//   try {
//     const notes = await Notes.findOne()
//     fs.readFile('data/testFileMain.txt', 'utf-8', (err, files) => { 
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       if (err) {
//         let json = { status:false, message: 'It seems there is a mistake somewhere' };
//         res.end(JSON.stringify(json));
//       }else {
//         console.log(files)
//         let json = { status:true, message:'file read', data:files };
//         res.end(JSON.stringify(json));
//       }
//     }) 
//   } catch (error) {
//     console.log(error)
    
//   }
// }

