import express from 'express'
import { loginEndpoint } from './endpoints/users/loginEndpoint'
import { getAllVideosEndpoint } from './endpoints/videos/getAllVideosEndpoint'
import signupEndpoint from './endpoints/users/signupEndpoint'

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

// endpoints aqui
app.post("/login", loginEndpoint)
app.get("/videos", getAllVideosEndpoint)
app.post("/user/signup", signupEndpoint)

export default app