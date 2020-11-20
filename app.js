const express = require('express');
const app = express();
const authenticateRouter = require('./routes/authenticateRoute');

app.use(express.static(__dirname + "/public"));
app.use(authenticateRouter);

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/login/login.html");
});

app.get("/register", (req, res) => {
    return res.sendFile(__dirname + "/public/signup/signup.html");
});

app.get("/test/:userData", (req, res)=>{
    console.log("req data =", req.params.userData)
    return res.send({
        message: req.params.userData,
        querystring: req.query}
        )
})
const port = process.env.PORT || 8080;
app.listen(port, (error) =>{
    if (error){
        console.log( "Server could not start.. Error: " + error);
    }
    console.log("Server started on port", Number(port))
});