import { isValidPhoneNumber } from 'libphonenumber-js'

const JsonResponse = (item, status) => {
  return new Response(JSON.stringify(item), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const handleRequest = async req => {
  if (req.method === 'POST') {
    return await handlePost(req)
  }
  return JsonResponse({ message: 'Not Allowed' }, 401)
}

const handlePost = async req => {
  const form = await req.json()
  const validationError = await validateForm(form)
  if (validationError) {
    return validationError
  }
  return JsonResponse(form, 200)
}

const validateForm = async (form, ip) => {
  const required_fields = [
    'fname',
    'lname',
    'email',
    'phone',
    'interest',
    'gdpr',
  ]
  const email_field = 'email'
  const phone_field = 'phone'

  // Check for required fields
  for (let i = 0; i < required_fields.length; i++) {
    let field = required_fields[i]
    if (!form[field]) {
      return JsonResponse({ message: `${field} is required` }, 400)
    }
  }

  // Check for valid email field
  const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!email_regex.test(form[email_field])) {
    return JsonResponse({ message: 'Please enter a valid email address' }, 400)
  }
  if (!isValidPhoneNumber(form[phone_field], 'TR')) {
    return JsonResponse({ message: 'Please enter a valid phone number' }, 400)
  }
  return false
}
