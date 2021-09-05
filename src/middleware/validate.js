import { JsonResponse } from '../lib/helpers'

const validate = validateFunc => async req => {
  const data = await req.json()
  validateFunc(data)
  if (validateFunc.errors) {
    const message = validateFunc.errors[0].message
    const field = validateFunc.errors[0].instancePath.replace('/', '')
    return JsonResponse({ message, field }, 400, req)
  }
  req.data = data
}

export default validate
