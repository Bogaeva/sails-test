/**
 * Status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	title: {
          type: 'string',
          required: true,
          maxLength: 100
    },
      
    name: {
          type: 'string',
          required: true,
          maxLength: 30
    },
      
    description: {
          type: 'string',
          required: false,
          maxLength: 1024
    }
  }
};

