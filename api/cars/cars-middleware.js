const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

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
  const {vin, make, model, mileage} = req.body
  if(vin === undefined) {
    next({
      status: 400,
      message: `vin is missing`
    })
  } else if(make === undefined) {
    next({
      status: 400,
      message: `make is missing`
    })
  } else if(model === undefined) {
    next({
      status: 400,
      message: `model is missing`
    })
  } else if(mileage === undefined) {
    next({
      status: 400,
      message: `mileage is missing`
    })
  } else {
    next()
  }
}

const checkVinNumberValid = async (req, res, next) => {
  const {vin} = req.body
  if(vinValidator.validate(vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${vin} is invalid`
    })
  }
}

const checkVinNumberUnique = (req, res, next) => {
  
} 

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}