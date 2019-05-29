import GalaxyService from '../services/GalaxyService'
import express from 'express'


let _service = new GalaxyService()
let _repo = _service.repository


export default class GalaxyController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .post('', this.createGalaxy)
      .get('/:id', this.getGalaxyById)
      .put('/:id', this.editGalaxy)
      .delete('/:id', this.deleteGalaxy)
      .get('/:id/star', this.getStars)
      .get('/:id/star', this.getStar)
      .post('/:id/star', this.addStar)
      .delete('/:id/star/:starId', this.deleteStar)
      .use('*', this.defaultRoute)
  }

  //GET STUFF
  async getAllGalaxies(req, res, next) {
    try {
      let galaxies = await _repo.find({})
      return res.send(galaxies)

    } catch (error) { next(error) }
  }

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _repo.create(req.body)
      return res.status(201).send(galaxy)
    } catch (error) { next(error) }
  }

  async getGalaxyById(req, res, next) {
    try {
      let galaxy = await _repo.findById(req.params.id)
      return res.send(galaxy)
    } catch (error) { next(error) }
  }
  async editGalaxy(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async deleteGalaxy(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getStars(req, res, next) {

  }
  async getStar(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async addStar(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async deleteStar(req, res, next) {
    try {

    } catch (error) {

    }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('No such Galaxy')
  }
}


