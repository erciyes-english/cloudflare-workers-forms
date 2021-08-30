import {
  JsonResponse,
  hasMissingFields,
  isValidEmail,
  isValidPhone,
  isValidMinLength,
  isValidMaxLength,
} from '../helpers'

const registerForm = async form => {
  return JsonResponse(form, 200)
}

export default registerForm
