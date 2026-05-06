import express from "express"

export const app = express()

app.get("/", (req, res) => {
  res.send("This is the theater service")
})
