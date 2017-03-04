const Joi = require('joi');

const findAll = {

};

const create = {
  payload: {
    name: Joi.string().required(),
    club: Joi.string().required(),
    position: Joi.string().required(),
    age: Joi.number().integer().required()
  }
};

module.exports = {
  findAll,
  create
}
