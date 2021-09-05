module.exports.default = {
  type: 'object',
  properties: {
    fname: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },

    lname: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },

    email: {
      type: 'string',
      format: 'email',
      maxLength: 200,
    },

    phone: {
      type: 'string',
      format: 'tel',
      maxLength: 200,
    },
    interest: {
      type: 'string',
      maxLength: 100,
    },

    gdpr: {
      const: 'true',
    },
  },
  required: ['fname', 'lname', 'email', 'phone', 'interest', 'gdpr'],
  additionalProperties: false,
}
