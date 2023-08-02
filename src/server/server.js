const express = require('express');  
const path = require('path');  
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

const port=8080;  

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
}); 

app.get('/api',function(req,res){  
    res.send('<p>This is a api Data</p>');  
});

app.listen(port,function(error){  
    if(error) {  
        console.log(error);  
    } else {  
        console.log("Application running on port: " + port);  
    }  
})