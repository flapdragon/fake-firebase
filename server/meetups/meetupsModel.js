import mongoose from "mongoose"
import meetupsSchema from "./meetupsSchema.js"

// Create meetups instance/model
const meetupsModel = mongoose.model("meetups", meetupsSchema)

export default meetupsModel