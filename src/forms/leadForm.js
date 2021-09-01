import theToken from '../lib/googleSheets'
import { JsonResponse } from '../lib/helpers'

import validate from '../scripts/leadForm.validate'

const leadForm = async form => {
  validate(form)

  if (validate.errors) {
    const message = validate.errors[0].message
    const field = validate.errors[0].instancePath.replace('/', '')
    return JsonResponse({ message, field }, 400)
  }

  const stuff = await theToken(form)
  return JsonResponse({ message: 'Sent' }, 200)
}

export default leadForm
