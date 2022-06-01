const boom = require('@hapi/boom');

class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    return [];
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

module.exports = CategoryService;

// setInterval(()=>{
//   let floatTag = document.getElementsByClassName('FloatNotification');
//   if(floatTag){
//     floatTag.remove()
//   }
//     },60000)
