const express = require('express');
const app = express()
const data = require("./data.json")

app.use(express.json());


// Verbos HTTP
//GET, POST, PUT, DELETE

app.get("/clients", function(req,res) {
    res.json(data);

});
app.get("/clients/:id", function(req,res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id = id);

    if (!client) return res.status(404).json();
    res.json(client);
});
app.post("/clients", function(req,res) {
    const {name, email} = req.body;

    const client = data.find(clicli.id = id);
    res.json({name, email});
});
app.put("/clients/:id", function(req,res) {
    const { id } = req.params;

    if (!client) return res.status(404).json();
    
    const { name } = req.body;

    client.name = name;

    res.json(client);
});
app.delete("/clients/:id", function(req,res){
    const { id } = req.params;
    const clientsFIltered = data.filter(client => client.id != id);
    
    res.json(clientsFIltered)
});

app.listen(3000,function(){
    console.log('server is running');
});