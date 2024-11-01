import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import messageRouter from './src/modules/message/message.router.js'
import dotenv from 'dotenv'
import { User } from './models/user.model.js'
dotenv.config()
const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use("/messages",messageRouter)
app.get('/verify/:email',  async (req,res) => { 
    await User.findOneAndUpdate({email: req.params.email}, {verified: true})
    res.json({message: "Email verified successfully"})
 })

dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))