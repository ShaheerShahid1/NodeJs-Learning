const express = require("express");
const app = express();
const port = 8001;
const users= require("./MOCK_DATA.json");
const fs=require("fs");
const { json } = require("stream/consumers");

app.listen(port, () => console.log(`Server is Started on Port : ${port}`));

//MiddleWare or Plugin

app.use(express.urlencoded({extended : false})); //Works like 'Node URL Module' that Parse the URL data for express to understand it


app.get('/',(req,res)=>{
  return res.send("Hey Welcome to Users dataBase!");
});

//Html SSR
app.get("/users",(req,res)=>{
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});



//RESTFUL API CSR

app.route("/api/users").get((req, res) => {
  return res.json(users);
})
.post((req,res)=>{
  //TODO: Create NEW User
  const body = req.body; 
  console.log(body);
  users.push({id: users.length + 1 , ...body});
  fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users),(err , data)=>{
    if(err) {
      console.log("Failed to store user entry");
    return res.json({status: 'failed'});
    }
    else{
      return res.json({status: 'success', id: users.length});
    }
  });
});

app.route('/api/users/:id')
.get((req,res)=>{
  const id= Number(req.params.id);
  const user=users.find((user) => user.id === id);
  return res.json(user);
})
.put((req, res) => {
  // Update the user with id and persist to JSON file
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  // Update user fields (extend as needed)
  users[userIndex] = { ...users[userIndex], ...req.body };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.json({ status: 'failed', message: 'Could not update user' });
    }
    return res.json({ status: 'updated', user: users[userIndex] });
  });
})
.delete((req,res)=>{
   //TODO: delete the user with id
  return res.json({status: 'pending'});
});

