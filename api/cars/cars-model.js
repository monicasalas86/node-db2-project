const db = require('../../data/db-config')

const getAll = () => {
  const result = db('cars')
  return result
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
}