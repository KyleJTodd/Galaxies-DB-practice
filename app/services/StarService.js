import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  lightyears: { type: Number },
})

export default class {
  get repository() {
    return mongoose.model('photo', _schema)
  }
}