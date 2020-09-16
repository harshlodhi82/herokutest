const express = require("express")
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send("This is Test API on Firebase.")
})

app.get('/json', (req, res) => {
    res.json({ msg: "This is Test API on Firebase." })
})

app.listen(PORT, () => {
    console.log(`Listioning on ${PORT}`);
})