const express = require('express');
const router = express.Router();
const {handleGetAllUsers,handleCreateNewlUser,handleGetUserById,handleUpdateUserById,handleDeleteUserById} = require('../controllers/user');
const user = require("../models/user"); 


//RESTFUL API CSR

router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewlUser);

router.route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

  module.exports = router;