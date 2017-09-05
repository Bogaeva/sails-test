/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	email: {
          type: 'string',
          required: true,
          maxLength: 50,
          unique: true,
          email: true
    },
      
    userName: {
          type: 'string',
          required: true,
          maxLength: 100
    },
      
    phone: {
          type: 'string',
          required: false,
          
    },
  }
};

