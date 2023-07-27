const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const router = require('../src/routes/index')

const server = express();
const PORT = 3001;



server.use(morgan('dev'))
server.use(cors())

server.use(express.json())

server.use('/rickandmorty', router)


server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});

// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*'); //?
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });















// const http =require("http")
// const getCharById = require("./controllers/getCharById")

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req;
// if(url.includes("rickandmorty/character/")){
//     const id = url.split("/").at(-1)
//     // const character = data
//     // getCharById(res, url.id)
//  getCharById(res,id)
// }
// }).listen(3001, 'localhost')


//* esto estaba en la linea 9!
// if(url.includes("rickandmorty/character/")){
//     const id = url.split("/").at(-1)
//     const character = data.find((c)=>c.id == id)
//     if(character){
//         res.writeHead(200, {"Content-Type":"application/json"})
//         return res.end(JSON.stringify(character))
//     }else{
//         res.writeHead(404,{"Content-Type":"application/json"})
//         return res.end(JSON.stringify({error:  "Character not found"}))
//     }
// }