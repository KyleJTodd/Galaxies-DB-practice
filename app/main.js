import express from "express"
import '../db/dbconfig'
let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//above does not change

//register routes
import GalaxyController from './controllers/GalaxyController'

server.use('/api/galaxy', new GalaxyController().router)




//below this line stays the same
//default error handler
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})
server.listen(port, () => {
  console.log('Server running on port: ' + port)
})