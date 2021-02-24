const userModel = require('./users.model');
const { validationResult } = require('express-validator');

const getAll = async (req, res) => {
    const users = await userModel.getAll();
    return res.status(200).json(users);
  };
  
  const getOne = async (req, res) => {
    const user = await userModel.getOne(req.params.id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).end();
  };

  const create = (req, res) => {

     // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newuser = req.body;
    const usersUpdated = userModel.create(newuser);
    return res.status(201).json(usersUpdated);
  };
  
  const update = (req, res) => {
    const updateduser = req.body;
    const usersUpdated = userModel.update(req.params.id, updateduser);
    return res.status(200).json(usersUpdated);
  };
  
  const remove = (req, res) => {
    const usersWithoutTheDeleted = userModel.remove(req.params.id);
    return res.status(200).json(usersWithoutTheDeleted);
  };
  
  module.exports = {
    create,
    update,
    getAll,
    getOne,
    remove,
  };