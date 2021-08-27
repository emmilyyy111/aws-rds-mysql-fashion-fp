const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(express.json())

const { userSignin, createNewUser, deleteUser, updateUserAge, getAllUsers} = require("./src/users");
const { getAllOutfits, getOutfitsByStyle } = require("./src/outfits");

app.get("/outfits", getAllOutfits);
app.get("/outfits/:style/", getOutfitsByStyle);
app.post("/signin", userSignin);
app.post("/users", createNewUser);
// app.get("/users", getAllUsers);
app.delete("/users", deleteUser);
app.put("/users", updateUserAge);

app.listen(5000, () => {
   console.log('Listening on port 5000 ...');
});
