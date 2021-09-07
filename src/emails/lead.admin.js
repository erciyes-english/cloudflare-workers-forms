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
    emailTemplateId: 'd-ae12673e6708423d8fec01fb75f2ccfb',
    emailTemplateData: {
      items,
      subject: 'New Lead Submission from erciyesenglish.com',
    },
  }
}

export default LeadAdminEmail
