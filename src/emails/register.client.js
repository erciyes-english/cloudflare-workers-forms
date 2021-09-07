const RegisterClientEmail = fields => {
  return {
    to: FORMS_CLIENT_REGISTER_TO,
    emailTemplateId: 'd-498bfd7683e1401699ff16707f3c5f2b',
    emailTemplateData: {
      fname: fields.fanme,
      lang: 'tr',
    },
  }
}

export default RegisterClientEmail
