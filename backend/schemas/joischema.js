const Joi = require('@hapi/joi');

const registerAuthSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  mobile: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
});
const loginAuthSchema=Joi.object({
    email: Joi.string().email(),
    mobile: Joi.string().pattern(new RegExp('^[0-9]{10}$')),
    password: Joi.string().min(8).required(),
  }).or('email', 'mobile');
module.exports = { registerAuthSchema,loginAuthSchema };
