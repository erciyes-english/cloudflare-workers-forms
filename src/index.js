import { JsonResponse } from './lib/helpers'

import { Router } from 'itty-router'
import validate from './middleware/validate'
import sheets from './middleware/sheets'
import email from './middleware/email'

import leadValidate from './scripts/leadForm.validate'
import registerValidate from './scripts/registerForm.validate'

import LeadAdminEmail from './emails/lead.admin'
import RegisterAdminEmail from './emails/register.admin'

const router = Router({ base: '/forms' })

router.post(
  '/lead',
  validate(leadValidate),
  sheets(GOOGLE_SHEET_ID),
  email(LeadAdminEmail),
  () => JsonResponse({ message: 'sent' }, 200),
)
router.post(
  '/register',
  validate(registerValidate),
  sheets(GOOGLE_SHEET_ID),
  email(RegisterAdminEmail),
  () => JsonResponse({ message: 'sent' }, 200),
)
router.all('*', () => JsonResponse({ message: 'Not Found.' }, 404))

addEventListener('fetch', event =>
  event.respondWith(router.handle(event.request)),
)
