import mongoose from 'mongoose'


let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
})

export default class GalaxyService {
  get repository() {
    return mongoose.model('galaxy', _schema)
  }
}