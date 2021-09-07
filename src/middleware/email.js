import { JsonResponse } from '../lib/helpers'
const email = settings => async req => {
  const { data } = req
  const emailSettings = settings(data)
  const fullUrl = `https://api.sendgrid.com/v3/mail/send`
  const body = {
    template_id: emailSettings.emailTemplateId,
    personalizations: [
      {
        to: emailSettings.to.split(', ').map(item => ({ email: item })),
        dynamic_template_data: emailSettings.emailTemplateData,
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
      return JsonResponse({ message: result.errors }, 500, req)
    }
  } catch (e) {
    return JsonResponse({ message: 'Email Delivery Error.' }, 500, req)
  }
}

export default email
