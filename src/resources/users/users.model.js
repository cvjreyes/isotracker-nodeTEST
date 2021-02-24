//const express = require('express');
//const router = express.Router();
const mysqlConnection = require('../../database.js');

//router.get('/users', (req, res) =>{
const getAll = async (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};    
//});

//router.get('/users/:id', (req, res) =>{
const getOne = async (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) =>{
        if(!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        } 
    })
};
//});

//router.post('/users', (req, res) =>{
const create = (req, res) => {
    const {name, email} = req.body;
    mysqlConnection.query('INSERT INTO users (name, email) VALUES (?,?)', [name, email], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Register Created'});
        }else{
            console.log(err);
        }
    })
};
//});

//router.put('/users/:id', (req, res) =>{
const update = (req, res) => {
    const {name, email, password} = req.body;
    const { id } = req.params; 
    mysqlConnection.query('UPDATE users SET name=?, email=?, password=? WHERE id=?', [name, email, password, id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Register Updated'});
        }else{
            console.log(err);
        }
    })
};
//});

//router.delete('/users/:id', (req, res) =>{
const remove = (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) =>{
        if(!err) {
            res.json({Status: 'Register Deleted'});
        }else{
            console.log(err);
        } 
    })
};
//});



//module.exports = router;
module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove
  };