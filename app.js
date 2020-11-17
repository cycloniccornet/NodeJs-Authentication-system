const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/login", (req, res) => {
    return res.sendFile(__dirname + "/public/login/login.html");
});

const port = process.env.PORT || 8080;
app.listen(port, (error) =>{
    if (error){
        console.log( "Server could not start.. Error: " + error);
    }
    console.log("Server started on port", Number(port))
});