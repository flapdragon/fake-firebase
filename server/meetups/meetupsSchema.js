import mongoose from "mongoose"

const Schema = mongoose.Schema

const MeetupsSchema = new Schema({
  ip: String, // Student IP address
  address: String,
  description: String,
  image: String,
  title: String
})

export default MeetupsSchema