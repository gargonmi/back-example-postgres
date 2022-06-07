const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

  constructor(){
  }

  async create(data) {
    console.log('en servicio CRATE DATA getAttributes(): ',models.Order.getAttributes());
    await models.Order.sync()
    console.log('en servicio CRATE DATA  post sync getAttributes(): ',models.Order.getAttributes());
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    // const order = await models.Order.findByPk(id);
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
