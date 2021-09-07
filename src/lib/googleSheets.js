import { getToken } from '@sagi.io/workers-jwt'
const getAccessToken = async () => {
  const payload = {
    iss: GOOGLE_API_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: Date.now() / 1000 + 3600,
    iat: Date.now() / 1000,
  }
  const privateKeyPEM = GOOGLE_API_KEY.replace(/\\n/g, '\n')
  const webtoken = await getToken({ privateKeyPEM, payload })
  const details = {
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: webtoken,
  }
  const body = Object.keys(details)
    .map(
      key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]),
    )
    .join('&')
  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
    const jsonToken = await response.json()
    if (!jsonToken.access_token) throw new Error('No Token')
    await GOOGLE.put('token', jsonToken.access_token, {
      metadata: { exp: Date.now() / 1000 + 3000 },
    })
    return jsonToken.access_token
  } catch (e) {
    return e
  }
}
const saveToSheets = async (form, sheetId) => {
  const GoogleKv = await GOOGLE.getWithMetadata('token')
  const expKv = GoogleKv.metadata ? GoogleKv.metadata.exp : 0
  const accessKv = GoogleKv.value

  let accessToken = accessKv
  if (expKv <= Date.now() / 1000) {
    accessToken = await getAccessToken()
  }

  const range = 'A1'
  const options = '?insertDataOption=INSERT_ROWS&valueInputOption=RAW'
  const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/`
  const fullUrl = `${baseUrl}${sheetId}/values/${range}:append${options}`
  try {
    const sheetPost = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        values: [[...Object.values(form), new Date().toISOString()]],
      }),
    })
    return sheetPost.json()
  } catch (e) {
    return e
  }
}

export default saveToSheets
