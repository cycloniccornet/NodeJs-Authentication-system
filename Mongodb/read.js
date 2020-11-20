const MongoClient = require('mongodb').MongoClient;
const connectionURL = 'mongodb://localhost:27017';

async function authenticateUser(req, res) {

    try {
        MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
            if (error) throw new Error(error);
            const auth = client.db("auth");
            const users = auth.collection("users");


            users.find({email: req.body.email}).toArray((error, fetchedUser) => {
                if (error) throw new Error(error);

                const userData = fetchedUser[0]
                console.log("Userdata: ", userData);
                if (req.body.password === userData.password ) {

                    res.status(200).send({
                        message: 'Login complete.',
                        firstname: userData.firstname,
                        lastname: userData.lastname,
                        email: userData.email
                    })
                    //return res.redirect("/test");

                } else return res.status(400).redirect("/");
            });
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = authenticateUser;