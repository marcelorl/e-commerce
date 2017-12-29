const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const model = require('./models').products;

exports.read = async id =>
  await model.findById(id);

exports.list = async ids => {
  let where = {};

  if (ids) {
    where = {
      where: {
        id: {
          [Op.in]: ids
        }
      }
    };
  }

  return await model.findAll(where)
    .map(item => item.dataValues);
};

exports.save = async data =>
  await model.create(data);
