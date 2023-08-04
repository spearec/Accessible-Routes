const express = require('express');  
const path = require('path');  
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

const port = 3000;  

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
}); 

app.get('/api',function(req,res){  
    res.send('<p>This is a api Data</p>');  
});

// API functions, either app.use for functions and app.get for middleware, can be added here

app.listen(port,function(error){  
    if(error) {  
        console.log(error);  
    } else {  
        console.log("Application running on port: " + port);  
    }  
})