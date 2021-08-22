const express = require('express')
const cors = require('cors')
require('dotenv').dbconfig
const app = express()
app.use(cors())
app.use(express.json())

const { userSignin, createNewUser, deleteUser, updateUserAge } = require("./src/users")

// app.get('/', (req, res) => {
//     console.log('hello emily')
// })

app.get("/users", userSignin);
app.post("/users", createNewUser);
app.delete("/users", deleteUser);
app.put("/users", updateUserAge);

app.listen(5000, () => {
   console.log('Listening on port 5000 ...');
});
