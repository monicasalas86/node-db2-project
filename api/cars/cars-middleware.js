const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const {id} = req.params
  Cars.getById(id)
    .then(possibleCar => {
      if(possibleCar) {
        req.carFromDb = possibleCar
        next()
      } else {
        next({
          status: 404,
          message: `car with ${id} is not found`
        })
      }
    })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
} 

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}