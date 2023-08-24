const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res =>{
    db.query('SELECT * FROM usuarios', (err, result) =>{
        if(err){
            res.status(500).json({error: 'Erro ao buscar usuários'});
        }else{
            res.status(200).json(result);
        }
    })
}));

router.post('/usuario', (req, res)=>{
    const {nome, email} = req.body;
});