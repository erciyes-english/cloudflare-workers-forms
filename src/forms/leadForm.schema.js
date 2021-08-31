module.exports.default = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    fname: {
      type: 'string',
    },

    lname: {
      type: 'string',
    },

    email: {
      type: 'string',
      format: 'email',
    },

    phone: {
      type: 'string',
      format: 'tel',
    },

    interest: {
      type: 'string',
    },

    gdpr: {
      type: 'boolean',
    },
  },
  required: ['id', 'fname', 'lname', 'email', 'phone', 'interest', 'gdpr'],
  additionalProperties: false,
}
