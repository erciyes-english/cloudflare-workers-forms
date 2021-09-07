const LeadAdminEmail = fields => {
  let items = []
  for (const key in fields) {
    items.push({
      label: key,
      item: fields[key],
    })
  }
  return {
    to: FORMS_ADMIN_LEAD_TO,
    subject: 'New Lead Submission from erciyesenglish.com',
    emailTemplateId: 'd-ae12673e6708423d8fec01fb75f2ccfb',
    emailTemplateData: {
      items,
    },
  }
}

export default LeadAdminEmail
