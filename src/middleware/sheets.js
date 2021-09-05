import { JsonResponse } from '../lib/helpers'
import saveToSheets from '../lib/googleSheets'

const sheets = sheetId => async req => {
  const { data } = req
  try {
    await saveToSheets(data, sheetId)
  } catch (err) {
    JsonResponse({ message: 'Google Sheets Error.' }, 500, req)
  }
}

export default sheets
