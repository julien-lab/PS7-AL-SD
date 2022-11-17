const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('CulturalActor', {
    lastName : Joi.string(),
    firstName: Joi.string()
});
