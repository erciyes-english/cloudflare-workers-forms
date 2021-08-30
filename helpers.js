import { isValidPhoneNumber } from 'libphonenumber-js'

export const JsonResponse = (item, status) => {
  return new Response(JSON.stringify(item), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}

export const hasMissingFields = (input, fields) => {
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i]
    if (!input[field]) {
      return field
    }
  }
  return false
}

export const isValidEmail = email => {
  const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!email_regex.test(email)) {
    return false
  }
  return true
}

export const isValidPhone = phone => {
  if (!isValidPhoneNumber(phone, 'TR')) {
    return false
  }
  return true
}

export const isValidMaxLength = (field, max) => {
  if (field.length <= max) {
    return true
  }
  return false
}

export const isValidMinLength = (field, min) => {
  if (field.length >= min) {
    return true
  }
  return false
}
