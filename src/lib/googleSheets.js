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
    return jsonToken.accessToken
  } catch (e) {
    return e
  }
}
const saveToSheets = async form => {
  const accessToken = getAccessToken()
  try {
    const sheetPost = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/A1:append?insertDataOption=INSERT_ROWS&valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          values: [Object.values(form)],
        }),
      },
    )
    return sheetPost.json()
  } catch (e) {
    return e
  }
}

export default saveToSheets
