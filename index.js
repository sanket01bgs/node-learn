                        //simple server and api
// const http = require("http");
// const data = require('./data');
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "applicationjson" });
//     resp.write(
//       JSON.stringify(data)
//     );
//     resp.end();
//   })
//   .listen(5000);
  
                       //Getting input from command line

// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input")
// };

                         //Display file list from folder

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// for(i=0; i<5; i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// }

// fs.readdir(dirPath,(err, files)=>{
//     files.forEach((item) => {
//         console.log("file name is : ", item);
//     });
// });
                          //CRUD with file system

const fs = require('fs');   
const path = require('path');
const dirPath = path.join(__dirname,'crud');

const filePath = `${dirPath}/name.txt`;

// fs.writeFileSync(filePath,'My name is sanket kumar');   
// fs.readFile(filePath,'utf8',(err, item)=>{
//    console.log(item);
// });

// fs.appendFile(filePath,' and i am 25 year old ',(err)=>{
//    if(!err) console.log("file is updated");
// })  

// fs.rename(filePath,`${dirPath}/sanket.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })

fs.unlinkSync(`${dirPath}/sanket.txt`);