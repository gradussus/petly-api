const Joi = require("joi");
const nameRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegexp = /^[a-zA-Z0-9а-яА-Я]+$/;
const phoneRegexp = /^\+380\d{9}$/;
const cityRegexp = /^[а-яёіїєА-ЯЁІЇЄA-Za-z]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z]+$/;
const dateRegexp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
const breedRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const commentsRegexp = /^[а-яёіїєА-ЯЁІЇЄa-zA-Z0-9]+$/;

const joiUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).min(7).max(32).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  city: Joi.string().pattern(cityRegexp).min(2).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().pattern(passwordRegexp).min(7).max(32).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const joiUpdatedUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp),
  password: Joi.string().pattern(passwordRegexp).min(7).max(32),
  email: Joi.string().pattern(emailRegexp),
  city: Joi.string().pattern(cityRegexp).min(2),
  phone: Joi.string().pattern(phoneRegexp),
});

const joiPetSchema = Joi.object({
  petName: Joi.string().pattern(nameRegexp).min(2).max(16),
  birthDate: Joi.string().pattern(dateRegexp),
  breed: Joi.string().pattern(breedRegexp).min(2).max(16),
  comments: Joi.string().pattern(commentsRegexp).min(8).max(120),
});

module.exports = {
  joiUserSchema,
  joiLoginSchema,
  joiUpdatedUserSchema,
  joiPetSchema,
};
