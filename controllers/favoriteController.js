const { Favorite } = require('../models/index')

class Controller {

  static async getFavo(req, res, next) {
    try {
      const result = await Favorite.findAll({
        where: {
          UserId: req.currentUser.id
        }
      })
      res.status(200).json(result)
    } catch (err) {
      console.log(err);
    }
  }

  static async addtofavo(req, res, next) {
    try {
      const { idDrink, name, category, type } =req.body
      const value = {
        idDrink: idDrink,
        name: name,
        Category: category,
        type:type,
        UserId: req.currentUser.id
      }
      await Favorite.create(value)
      res.status(201).json({name: "recipe added to favorite"})
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller