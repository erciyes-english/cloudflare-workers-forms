const { isValidPhoneNumber } = require('libphonenumber-js')

module.exports = {
  tel: maybePhoneNumber => isValidPhoneNumber(maybePhoneNumber, 'TR'),
}
