const { error } = require('console');
const fs = require('fs');
const { isDate } = require('util/types');
let name = 'Shaheer';

//Sync....Blocking Request
//fs.writeFileSync("test.txt", `Hey my name is ${name}`);
const result = fs.readFileSync("./contact.txt" , "utf-8");
console.log(`The File Contain: ${result}`);
fs.appendFileSync('./contact.txt', `${Date.now()} hamza 0312333333 \n`);


//Async....Non-Blocking Request
fs.writeFile('./test.txt', `Hey my name is ${name}`, (err)=>{
    if(err){
    console.log("Error: ", err );
    }
    else{
        console.log("Updated the file successfully");
    }
    }
)

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error: ", err );
    }
    else{
        console.log(`The File Contain : ${result}`);
    }
})
