const express = require('express');  
const path = require('path');  
const app = express();
const { Pool } = require('pg');

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

const port = 3000;  

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
}); 

const pool = new Pool({
    user: 'postgres',
    database: 'routes',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
});

app.get('/api',function(req,res){  
    res.send('<p>This is a api Data</p>');  
});

app.get('/api/buildings', async function(req, res) {
    const result = await pool.query('SELECT * from buildings');
    res.json(result.rows);
});

app.get('/api/buildings/:building_id', async function(req, res) {
    const result = await pool.query(`SELECT * from buildings where name = '${req.params.building_id}'`);
    res.json(result.rows);
});

// API functions, either app.use for functions and app.get for middleware, can be added here

app.listen(port,function(error){  
    if(error) {  
        console.log(error);  
    } else {  
        console.log("Application running on port: " + port);  
    }  
})