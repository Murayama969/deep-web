const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs/promises');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res) => {
    res.status(201).sendFile(path.join(__dirname, 'public'))
})

app.listen(port, 'localhost', ()=>{
    console.log(`Server run at http://localhost:${port}`)
})