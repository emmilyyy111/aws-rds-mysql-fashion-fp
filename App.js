const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const { getAllUsers, createNewUser, deleteUser, updateUser} = require("./src/users")

// app.get('/', (req, res) => {
//     console.log('hello emily')
// })

app.get("/users", getAllUsers)
app.post("/users", createNewUser)
app.delete("/users", deleteUser)
app.patch("/users", updateUser)

app.listen(3000, () => {
   console.log('Listening on port 3000 ...')
})
