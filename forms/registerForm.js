import {
  JsonResponse,
  hasMissingFields,
  isValidEmail,
  isValidPhone,
  isValidMinLength,
  isValidMaxLength,
} from '../helpers'

import validate from '../validate'

const registerForm = async form => {
  const valid = validate(form)

  if (validate.errors) {
    const message = validate.errors[0].message
    const field = validate.errors[0].instancePath.replace('/', '')
    return JsonResponse({ message, field }, 400)
  }

  return JsonResponse({ message: 'Sent' }, 200)
}

export default registerForm
