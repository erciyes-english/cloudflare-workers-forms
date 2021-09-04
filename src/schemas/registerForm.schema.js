module.exports.default = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    course: { type: 'string', maxLength: 100 },
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

    address1: {
      type: 'string',
      maxLength: 200,
    },
    address2: {
      type: 'string',
      maxLength: 200,
    },
    city: {
      type: 'string',
      maxLength: 50,
    },
    province: {
      type: 'string',
      maxLength: 50,
    },

    installments: {
      type: 'string',
      maxLength: 100,
    },
    groupDiscount: {
      enum: ['true', 'false'],
    },

    otherDiscount: {
      enum: ['true', 'false'],
    },

    gdpr: {
      const: 'true',
    },
  },
  required: [
    'id',
    'course',
    'fname',
    'lname',
    'email',
    'phone',
    'address1',
    'city',
    'province',
    'installments',
    'gdpr',
  ],
  additionalProperties: false,
}
