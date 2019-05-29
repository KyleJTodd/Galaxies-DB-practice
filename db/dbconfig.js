//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

//THIS STRING WILL CHANGE SLIGHTLY-
const connectionString = "mongodb+srv://DBuser:DBuser123@cluster0-uwikr.mongodb.net/planets?retryWrites=true&w=majority"

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//log any errors
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//confirm connection
connection.once('open', () => {
  console.log('connected to the database')
})