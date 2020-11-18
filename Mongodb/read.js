const MongoClient = require('mongodb').MongoClient;
const connectionURL = 'mongodb://localhost:27017';


async function fetchOneUser(email) {
    console.log("Called fetch one user")
    try {
        await MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
            if (error) throw new Error(error);

            const auth = client.db("auth");

            const users = auth.collection("users");

            users.find( {email: email} ).toArray((error, fetchedUser) => {
                if (error) throw new Error(error);
                console.log(fetchedUser);
                client.close()
            });
        });
    } catch (error) {
        if (error) throw new Error(error);
    }
}

module.exports = fetchOneUser;