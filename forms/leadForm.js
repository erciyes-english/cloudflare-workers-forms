import {
  JsonResponse,
  hasMissingFields,
  isValidEmail,
  isValidPhone,
  isValidMinLength,
  isValidMaxLength,
} from '../helpers'

const leadForm = async form => {
  const required_fields = [
    'fname',
    'lname',
    'email',
    'phone',
    'interest',
    'gdpr',
  ]

  const missingField = hasMissingFields(form, required_fields)

  if (missingField) {
    return JsonResponse(
      { message: `${missingField} is required.`, field: missingField },
      400,
    )
  }

  if (!isValidMinLength(form.fname, 2)) {
    return JsonResponse(
      { message: `Name must be a minimum of 2 characters`, field: 'fname' },
      400,
    )
  }

  if (!isValidMaxLength(form.fname, 50)) {
    return JsonResponse(
      { message: `Name must be a maximum of 50 characters`, field: 'fname' },
      400,
    )
  }
  if (!isValidMinLength(form.lname, 2)) {
    return JsonResponse(
      { message: `Name must be a minimum of 2 characters`, field: 'lname' },
      400,
    )
  }

  if (!isValidMaxLength(form.lname, 50)) {
    return JsonResponse(
      { message: `Name must be a maximum of 50 characters`, field: 'lname' },
      400,
    )
  }

  if (!isValidEmail(form.email)) {
    return JsonResponse({ message: `Email is invalid.`, field: 'email' }, 400)
  }
  if (!isValidPhone(form.phone)) {
    return JsonResponse({ message: `Phone is invalid.`, field: 'phone' }, 400)
  }
  return JsonResponse(form, 200)
}

export default leadForm
