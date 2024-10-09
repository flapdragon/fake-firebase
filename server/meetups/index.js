import express from "express"
import meetupsCreate from "./meetupsCreate.js"
import meetupsRead from "./meetupsRead.js"

const meetupRoutes = express.Router()

// Create one meetup
meetupRoutes.post("/", meetupsCreate)
meetupRoutes.get("/", meetupsRead)

export default meetupRoutes