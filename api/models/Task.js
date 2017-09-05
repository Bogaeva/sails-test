/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	title: {
          type: 'string',
          required: true,
          maxLength: 50
          
    },
      
    description: {
          type: 'string',
          maxLength: 1024,
          required: true
    },
      
    performer: {
          required: true,
          model: 'user'
    },
      
    status: {
          required: true,
          model: 'status'
    },    
     
      
    endDate: {
          type: 'string',
          required: true
    },
  }
};

