const db = require('../../data/db-config')

const getAll = () => {
  const result = db('cars')
  return result
}

const getById = (id) => {
  const result = db('cars').where('car_id', id).first()
  return result
}

const create = async (newCar) => {
  const [id] = await db('cars').insert(newCar)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}