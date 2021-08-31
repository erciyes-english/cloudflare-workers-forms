const { default: Ajv, _ } = require('ajv')
const addFormats = require('ajv-formats').default
const myFormats = require('../lib/my-formats')
const standaloneCode = require('ajv/dist/standalone').default

const ajv = new Ajv({
  formats: myFormats,
  code: { source: true, formats: _`require("../lib/my-formats")` },
})
addFormats(ajv, ['email'])

const schema = {
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

const validate = ajv.compile(schema)
let moduleCode = standaloneCode(ajv, validate)

const fs = require('fs')
const path = require('path')
fs.writeFileSync(path.join(__dirname, '/validate.js'), moduleCode)
