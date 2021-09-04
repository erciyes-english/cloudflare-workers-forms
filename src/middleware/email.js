import { JsonResponse } from '../lib/helpers'
const email = async req => {
  const { data } = req
  const fullUrl = `https://api.sendgrid.com/v3/mail/send`
  const body = {
    personalizations: [
      {
        to: [{ email: FORMS_ADMIN_LEAD_TO }],
        subject: 'Api Test',
      },
    ],
    content: [
      {
        type: 'text/plain',
        value: `somebody`,
      },
    ],
    from: {
      email: SENDGRID_FROM_EMAIL,
      name: SENDGRID_FROM_NAME,
    },
    reply_to: {
      email: SENDGRID_REPLYTO_EMAIL,
      name: SENDGRID_REPLYTO_NAME,
    },
  }
  const bodyString = JSON.stringify(body)
  try {
    const sendEmail = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: bodyString,
    })
    if (sendEmail.status !== 202) {
      const result = await sendEmail.json()
      return JsonResponse({ message: result.errors }, 500)
    }
  } catch (e) {
    return JsonResponse({ message: 'Email Delivery Error.' }, 500)
  }
}

export default email