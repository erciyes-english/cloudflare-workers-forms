const { default: Ajv, _ } = require('ajv')
const addFormats = require('ajv-formats').default
const myFormats = require('../lib/my-formats')
const standaloneCode = require('ajv/dist/standalone').default

const ajv = new Ajv({
  formats: myFormats,
  code: { source: true, formats: _`require("../lib/my-formats")` },
})
addFormats(ajv, ['email'])

const compileAndSave = (schema, name) => {
  const validate = ajv.compile(schema)
  let moduleCode = standaloneCode(ajv, validate)

  const fs = require('fs')
  const path = require('path')
  fs.writeFileSync(path.join(__dirname, `/${name}.js`), moduleCode)
}

const leadFormSchema = require('../forms/leadForm.schema').default
compileAndSave(leadFormSchema, 'leadForm.validate')

const registerFormSchema = require('../forms/registerForm.schema').default
compileAndSave(registerFormSchema, 'registerForm.validate')
