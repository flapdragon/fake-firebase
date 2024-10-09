import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import meetupsRoutes from "./meetups/index.js"

// MongoDB
const mongoURL = process.env.FAKE_FIREBASE_URL || ""
mainDB().catch((err) => console.log(err))
async function mainDB() {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}

// Express
const app = express()
app.use(cors()) // Use CORS so students can connect and submit
app.use(express.json()) // Parse request body as JSON
const port = 8889

app.get('/', (req, res) => {
  res.send('🔥🏰')
})

// Meetup routes
app.use("/meetups", meetupsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})