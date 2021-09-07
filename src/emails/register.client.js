const RegisterClientEmail = fields => {
  return {
    to: fields.email,
    emailTemplateId: 'd-498bfd7683e1401699ff16707f3c5f2b',
    emailTemplateData: {
      fname: fields.fname,
      lang: fields.lang,
      subject:
        fields.lang === 'en'
          ? 'Erciyes English: Thank you for registering'
          : 'Erciyes English: Kayıt olduğunuz için teşekkürler',
    },
  }
}

export default RegisterClientEmail
