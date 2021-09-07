const RegisterClientEmail = fields => {
  return {
    to: fields.email,
    subject:
      fields.lang === 'en'
        ? 'Erciyes English: Thank you for registering'
        : 'Erciyes English: Kayıt olduğunuz için teşekkürler',
    emailTemplateId: 'd-498bfd7683e1401699ff16707f3c5f2b',
    emailTemplateData: {
      fname: fields.fname,
      lang: 'tr',
    },
  }
}

export default RegisterClientEmail
