import express from 'express'
import { loginEndpoint } from './endpoints/users/loginEndpoint'
import { getAllVideosEndpoint } from './endpoints/videos/getAllVideosEndpoint'

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

// endpoints aqui
app.post("/login", loginEndpoint)
app.get("/videos", getAllVideosEndpoint)

export default app