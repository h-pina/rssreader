const { response } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    user: 'hugo',
    host: 'localhost',
    database: 'hugo',
    password: 'password',
    port: 5432,  
})

const getAllRSS = (req,res) => {
    pool.query('SELECT * FROM rsslinks ORDER BY index ASC', (error,results) => {
        if (error){
            throw error;
        }
        console.log(results.rows);
        //response.status(200).json(results.rows);
    });
}

const getSingleRSS = (req,res) => {
    var index = parseInt(req.params.index);
    console.log(index);

    pool.query('SELECT * FROM rsslinks WHERE index = $1',[index], (error,results) => {
        if (error){
            throw error;
        }
        console.log(results.rows);
        //response.status(200).json(results);
    });
}

const addNewRSS = (req,res) => {
    const { name, link } = request.body;
    pool.query('INSERT INTO rsslinks(name,link) VALUES ($1,$2)',[name,link], (error,results) => {
        if (error){
            throw error;
        }
        console.log(results.rows);

//        response.status(200).send(`User created with index = ${index}`);
    });
}

const updateRssInfo = (req,res) => {

}

const deleteRSS = (req,res) => {
    var index = parseInt(req.id);
    pool.query('DELETE FROM rsslinks WHERE index = $1',[index], (error,results) => {
        if (error){
            throw error;
        }
        console.log(results.rows);
//        response.status(200).send(`User deleted with index = ${index}`);
    });
}

module.exports = {
    getAllRSS,
    getSingleRSS,
    addNewRSS,
    updateRssInfo,
    deleteRSS,
}