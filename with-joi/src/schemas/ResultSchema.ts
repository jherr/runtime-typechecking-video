import Joi from "joi";

export const ResultSchema = Joi.object({
  results: Joi.array()
    .required()
    .items(
      Joi.object({
        name: Joi.string().required(),
        id: Joi.number().required(),
        job: Joi.string().required(),
      })
    ),
})
  .required()
  .meta({ className: "Result" });
