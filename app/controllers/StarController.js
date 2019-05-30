import StarService from '../services/StarService'
import express from 'express'

let _service = new StarService()
let _repo = _service.repository


export default class StarController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .post('', this.createStar)
      .get('/:id', this.getStarById)
      .put('/:id', this.editStar)
      .delete('/:id', this.deleteStar)
      .get('/:id/planet', this.getPlanets)
      .post('/:id/planet', this.addPlanet)
      .delete('/:id/planet', this.deletePlanet)
      .use('*', this.defaultRoute)
  }
  async getAllStars(req, res, next) {
    try {
      let stars = await _repo.find({})
      return res.send(stars)
    } catch (error) { next(error) }
  }

  async createStar(req, res, next) {
    try {
      let star = await _repo.create(req.body)
      return res.status(201).send(star)
    } catch (error) { next(error) }
  }

  async getStarById(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getAllStars(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getAllStars(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getAllStars(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getAllStars(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async defaultRoute(req, res, next) {
    res.status(404).send('No Such Star')
  }
}