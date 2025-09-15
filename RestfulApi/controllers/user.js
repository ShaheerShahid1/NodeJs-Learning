const user = require ('../models/user');

async function handleGetAllUsers(req , res) {
    const allDbUsers = await user.find({});
    return res.json(allDbUsers);
}
async function handleCreateNewlUser(req , res) {
 const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job) {
      return res.status(400).json("All fields are required");
    }
    const result = await user.create({
      firstName : body.first_name,
      lastName : body.last_name,
      email : body.email,
      gender: body.gender,
      jobTitle: body.job,
    }); 
    return res.status(201).json({msg: 'Success', result: result.firstName});
}
async function handleGetUserById(req , res){
    res.setHeader("X-Log", " Log Updated"); //Custom Headers Always use X with the header name
    const userById = await user.findById(req.params.id);
    return res.json(userById);
}

async function handleUpdateUserById(req , res){
   await user.findByIdAndUpdate(req.params.id,{lastName : "Shah"}); 
   return res.status(202).json({status: 'success'});
}
async function handleDeleteUserById(req , res){
    await user.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}

module.exports = {
    handleGetAllUsers,
    handleCreateNewlUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
}