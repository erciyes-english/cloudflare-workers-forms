import leadForm from './forms/leadForm'
import registerForm from './forms/registerForm'
import { JsonResponse } from './helpers'

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
  if (!form.id) return JsonResponse({ message: 'Not Allowed' }, 401)
  if (form.id === 'lead') return await leadForm(form)
  if (form.id === 'register') return await registerForm(form)
  return JsonResponse({ message: 'Not Allowed' }, 401)
}
