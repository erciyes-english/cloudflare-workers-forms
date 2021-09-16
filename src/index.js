import { JsonResponse, isAllowedOrigin, corsHeaders } from './lib/helpers'

import { Router } from 'itty-router'
import validate from './middleware/validate'
import sheets from './middleware/sheets'
import email from './middleware/email'

import leadValidate from './scripts/leadForm.validate'
import registerValidate from './scripts/registerForm.validate'

import LeadAdminEmail from './emails/lead.admin'
import RegisterAdminEmail from './emails/register.admin'
import RegisterClientEmail from './emails/register.client'

const router = Router({ base: '/forms' })

router.post(
  '/lead',
  validate(leadValidate),
  sheets(GOOGLE_SHEET_LEAD_ID),
  email(LeadAdminEmail),
  req => JsonResponse({ message: 'sent' }, 200, req),
)
router.post(
  '/register',
  validate(registerValidate),
  sheets(GOOGLE_SHEET_REGISTER_ID),
  email(RegisterAdminEmail),
  email(RegisterClientEmail),
  req => JsonResponse({ message: 'sent' }, 200, req),
)
router.all('*', req => JsonResponse({ message: 'Not Found.' }, 404, req))

addEventListener('fetch', event => {
  const allowed = isAllowedOrigin(event.request)
  if (!allowed) {
    return event.respondWith(
      new Response(JSON.stringify('Unauthorized'), {
        status: 401,
        headers: {
          'content-type': 'application/json',
          ...corsHeaders('https://www.erciyesenglish.com'),
        },
      }),
    )
  }

  return event.respondWith(router.handle(event.request))
})
