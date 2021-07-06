const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      company: Joi.string().required(),
      place: Joi.string().required(),
      placemeters: Joi.number().required(),
      parkingmeters: Joi.number().required(),
      parkingplaces: Joi.number().required(),
      startdatecontract: Joi.string().required(),
      duedatecontract: Joi.string().required(),
      maintenance: Joi.number().required(),
      rent: Joi.number().required(),
      guarantee: Joi.number().required(),
      tel: Joi.number().required(),
      email: Joi.string().email().required(),
      contractor: Joi.string().required(),
    }),
  }),
  change: celebrate({
    [Segments.BODY]: Joi.object().keys({
      company: Joi.string(),
      place: Joi.string(),
      placemeters: Joi.number(),
      parkingmeters: Joi.number(),
      parkingplaces: Joi.number(),
      startdatecontract: Joi.string(),
      duedatecontract: Joi.string(),
      maintenance: Joi.number(),
      rent: Joi.number(),
      guarantee: Joi.number(),
      tel: Joi.number(),
      email: Joi.string().email(),
      contractor: Joi.string(),
    }),
  }),
};
