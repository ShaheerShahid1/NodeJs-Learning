Qconst express=require('express');
const app = express();
const port = 8000;

app.listen(port,()=>{
    console.log("Server is started!");
});


app.get('/', (req, res)=>{
    return res.send("Welcome to home page");
});
app.get('/about-us',(req,res)=>{
    return res.send(`Hello my name is ${req.query.name}`);
})
























/*
const myServer = http.createServer((req, res)=>{  // created a live server
const http = require('http'); //for server to run on http
const fs= require('fs'); // imported file system
const url=require('url'); // imported url from node modules

        if(req.url==='/favicon.ico') return res.end(); //ignoring request favicon.ico 
        const myUrl=url.parse(req.url,true); //parsing the default URL in meaningful objects
       // console.log(myUrl);
        fs.appendFile('log.txt',`${Date.now()} : ${req.url} : ${req.method} : New Request on Server \n`, (err)=>{  //logging user reqs in log.txt
        if (err) console.error("Error writing log:", err);
        });

        switch(myUrl.pathname){ //handling paths or Routing logic
         case '/':  
         res.end("Home Page");
         break;
         case '/about-us': 
         const name=myUrl.query.myname;
         res.end(`Hello my name is ${name}!`);
         break;
         case '/signup' : 
         if(req.method === 'GET'){ // req.methond tells us which http method is called on request.
            res.end("This is a SignUp form!");
         }
         else if(req.method==='POST'){
            //DB query
            res.end("Success");
         }
         break;
         default: 
         res.end("ERROR 404");
         break;
        }

    });


myServer.listen(8000, ()=>{console.log("Server is Started!")}); // on port 8000
// ()=>{} called call back functions.
*/
