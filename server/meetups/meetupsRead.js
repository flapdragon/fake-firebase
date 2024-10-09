import mongoose from "mongoose"
import meetupsModel from "./meetupsModel.js"

// API - HTTP Get
const meetupsRead = async (req, res) => {
  try {
    // Get daily question from MongoDB questions collection
    const meetup = await meetupsModel.find()
    // API response
    res.status(200).json(meetup)
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default meetupsRead