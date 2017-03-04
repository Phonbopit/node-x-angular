const Boom = require('boom');
const validate = require('./validate');
const Player = require('./player');
const User = require('./user');

const JWT = require('jsonwebtoken');

const login = {
  auth: false,
  handler: (request, reply) => {
    const payload = request.payload;

    User
      .find({username: payload.username})
      .exec()
      .then(user => {
        const token = JWT.sign({
          _id: user._id
        }, 'super_secret_key', {
          expiresIn: '3d'
        });

        return reply({
          message: 'Success',
          token
        });

      })
      .catch(error => {
        return reply(Boom.unauthorized(error));
      });
  }
};

const findOne = {
  validate: validate.findOne,
  handler: (request, reply) => {
    Player
      .findOne({name: request.params.name})
      .exec()
      .then(player => {
        return reply(player);
      })
      .catch(error => {
        return reply(Boom.badRequest(error));
      });
  }
};

const findAll = {
  validate: validate.findAll,
  handler: (request, reply) => {
    Player
      .find({})
      .exec()
      .then((players) => {
        return reply(players);
      })
      .catch(error => {
        return reply(Boom.badRequest(error));
      });
  }
};

const create = {
  validate: validate.create,
  handler: (request, reply) => {
    
  }
};

const update = {
  validate: validate.update,
  handler: (request, reply) => {

  }
};

const deletePlayer = {
  validate: validate.delete,
  handler: (request, reply) => {

  }
};

module.exports = {
  login,
  findOne,
  findAll,
  create,
  update,
  delete: deletePlayer
}