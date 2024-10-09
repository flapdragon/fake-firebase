import request from "request"
// import { questions } from "./questions-data-load.js"
import { DUMMY_DATA as meetups } from "./dummy-data.js"

console.log(meetups)

// Schema
// question: String,
// useDate: Boolean,
// rating: Number // TODO: Not implemented yet, thinking of a do you like this question kind of thing for feedback

const action = "bulk_create"
const id = ""
const port = 8889

switch (action) {
    
    case "bulk_create":
      console.log("bulk_create")
      meetups.map((meetup, index) => {
        console.log("map", meetup)
        request.post(
          `http://localhost:${port}/meetups/`,
          { json: meetup },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {
                  console.log(body)
              }
              else {
                console.log(error)
              }
          }
        )
      })
      break

}
