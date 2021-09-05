const RegisterAdminEmail = fields => {
  let items = []
  for (const key in fields) {
    items.push({
      label: key,
      item: fields[key],
    })
  }
  return {
    to: FORMS_ADMIN_REGISTER_TO,
    emailTemplateId: 'd-9779863aa89c4089887f412dd4341ef7',
    emailTemplateData: {
      items,
    },
  }
}

export default RegisterAdminEmail
