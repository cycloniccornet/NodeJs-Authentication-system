const MongoClient = require('mongodb').MongoClient;
const connectionURL = 'mongodb://localhost:27017';


function fetchOneUser(email) {

    try {
         MongoClient.connect(connectionURL, {useUnifiedTopology: true},  async (error, client) => {
            if (error) throw new Error(error);

            const auth = client.db("auth");

             const users = auth.collection("users");

             await users.find( {email: email} ).toArray( (error, fetchedUser) => {
                 if (error) throw new Error(error);

                 console.log("User fetched from database", fetchedUser[0]);
             });

        });

    } catch (error) {
        if (error) throw new Error(error);

    }
    return 'Data skal indsættes her \n';
}

module.exports = fetchOneUser;