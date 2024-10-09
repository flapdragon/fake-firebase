import mongoose from "mongoose"
import meetupsModel from "./meetupsModel.js"

// API - HTTP Post
const responsesCreate = async (req, res) => {
  console.log(req.body)
  console.log(req.socket.remoteAddress)
  // Get values from body
  let { address, description, image, title } = req.body
  // Get student IP
  const ip = req.socket.remoteAddress

  console.log( ip, address, description, image, title )

  try {
    // Create meetup record
    await meetupsModel.create({
      ip, address, description, image, title
    })
    // API response
    res.status(200).json({ "message": "Success. Record created." })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }

}

export default responsesCreate