
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(200, { "content-type": "text/html"})
//         res.end("<h1>Hello This is home page</h1>")
//         // res.end();
//         return;
//     }if(req.url === '/about'){
//         res.writeHead(200, { "content-type": "text/html" })
//         res.end("<h1>Hello This is about page</h1>")
//         // res.end()
//         return;
//     }
//     res.writeHead(404, { "content-type": "text/html" })
//     res.end("<h1>Oops looks like you are lost</h1>");
//     // res.end()
//     return;
// }).listen(4100);

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("<h1>This is Home page</h1>")
        res.end()
        return;
    }if(req.url === '/about'){
        res.write("<h1>This is about page</h1>")
        return;
    }res.write("<h1>Looks like you are lost</h1>")
    return;
})

server.listen(4400)





// ================================ class session =============================


// const { readFile, writeFile } = require('fs').promises;

// const start = async () => {
//     try{
//         const first = await readFile('./content/first.txt', 'utf8')
//         const second = await readFile('./content/second.txt', 'utf8')
//         await writeFile(
//             './content/output.txt',
//             `The content of first.txt and second.txt is: ${first}, ${second}\n`, { flag: 'a' }
//         )
//     }
//     catch(error){
//         console.log(error)
//     }
// }















// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('This is Home page')
//         return;
//     }if(req.url == '/about'){
//         res.end('This is About page')
//         return;
//     }
//     res.end('Oops looks like you are lostl')
//     return;
// })

// server.listen(5500)

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home page");
//   }
//   if (req.url === "/about") {
//     //BLOCKING CODE !!!
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end("About page");
//   }
//   res.end("error");
// });

// server.listen(5200, () => {
//   console.log("Server is listening on port 5200");
// });




// const { readFile, writeFile} = require('fs');

// const start = async () => {
//     try{
//         const first = await readFile("./content/first.txt", "utf-8")
//         const second = await readFile('./content/second.txt', 'utf-8')
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()








// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log("Your name is Mohammed Shafiq");
// })

// event.emit('sayMyName');





// const http = require('http');

// const server = http.createServer((req, res) => {
//     for(let i=0; i < 1000; i++){
//         res.end(`hello world ${i}`)
//     }
// })

// server.listen(5600)
















// var http = require('http');
// var fs = require('fs');

// http .createServer(function(req, res) {
//     // const text = fs.readFileSync('./content/big1.txt', 'utf8');
//     // res.end(text)
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
//     fileStream.on('open', () => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//         res.end(err)
//     })
// }).listen(4200)


// const { writeFileSync } = require("fs");

// console.log('stream example');

// for(let i = 0; i < 10000; i++){
//     writeFileSync('./content/big1.txt', `hello world ${i}\n`, { flag: 'a' })
// }










// const { readFile, writeFile } = require("fs").promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// const start = async () => {
//     try{
//         const first = await readFile('./content/first.txt', 'utf8'); 
//         const second = await readFile('./content/second.txt', 'utf8');
//         await writeFile('./content/result-mindgrenade.txt', `THIS IS AWESOME : ${first} ${second}`)
//         console.log(first, second)
//     }catch(error){
//         console.log(error);
//     }
// }

// start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }