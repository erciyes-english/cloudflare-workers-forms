import saveToSheets from '../lib/googleSheets'
import { JsonResponse } from '../lib/helpers'

import validate from '../scripts/registerForm.validate'

const registerForm = async form => {
  validate(form)

  if (validate.errors) {
    const message = validate.errors[0].message
    const field = validate.errors[0].instancePath.replace('/', '')
    return JsonResponse({ message, field }, 400)
  }

  try {
    const sheets = await saveToSheets(form, GOOGLE_SHEET_ID)
    return JsonResponse({ message: 'Sent' }, 200)
  } catch (err) {
    return JsonResponse({ message: err }, 500)
  }
}

export default registerForm
