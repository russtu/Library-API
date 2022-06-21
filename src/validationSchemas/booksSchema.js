const Joi = require('joi')
.extend(require('@joi/date'));


const booksSchema = Joi.object({
  isbn: Joi
    .string()
    .min(10)
    .max(14)
    .required()
    .messages({
      'any.required': 'isbn is required',
      'string.empty': 'isbn  can not be empty',
      'string.min': 'isbn is should be between 10 and 14 characters',
      'string.max': 'isbn is  should be between 10 and 14 characters'
    }),

  title: Joi
    .string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'any.required': 'title is required',
      'string.empty': 'title can not be empty',
      'string.min': 'title is should be between 1 and 100 characters',
      'string.max': 'title is  should be between 1 and 100 characters'
    }),

  author: Joi
  .string()
  .min(1)
  .max(100)
  .required()
  .messages({
    'any.required': 'author is required',
    'string.empty': 'author can not be empty',
    'string.min': 'author is should be between 1 and 100 characters',
    'string.max': 'author is  should be between 1 and 100 characters'
    }),

  category: Joi
  .string()
  .min(1)
  .max(100)
  .required()
  .messages({
    'any.required': 'category is required',
    'string.empty': 'category can not be empty',
    'string.min': 'category is should be between 1 and 100 characters',
    'string.max': 'category is  should be between 1 and 100 characters'
    }),

  publisher: Joi
  .string()
  .min(1)
  .max(100)
  .required()
  .messages({
    'any.required': 'publisher is required',
    'string.empty': 'publisher can not be empty',
    'string.min': 'publisher is should be between 1 and 100 characters',
    'string.max': 'publisher is  should be between 1 and 100 characters'
    }),

  publication_date: Joi
    .date().format('YYYY-MM-DD')
    .required()
    .messages({
      'any.required': 'publication_date is required',
    }),

})


module.exports = booksSchema