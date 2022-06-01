const boom = require('@hapi/boom');

const pool = require('../libs/postres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error',(_e)=>console.error('hay un error en el pool: ',_e))
  }

  async create(data) {
    return data;
  }

  async find() {
    const findQuery =  'SELECT * FROM tasks';
    const resp = await this.pool.query(findQuery)
    return resp.rows;
  }

  async findOne(id) {
    return { id };
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

module.exports = UserService;
