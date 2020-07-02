const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const dotenv = require("dotenv");
const cors = require('cors');

const app = express()
const port = process.env.PORT




app.use(cors())
dotenv.config();

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on Port ' + port)
})
