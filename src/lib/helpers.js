const allowedOrigins = [
  'https://www.erciyesenglish.com',
  'https://erciyesenglish.com',
  'https://ee-website.pages.dev',
  'http://localhost:8000',
  'http://127.0.0.1:8787',
]

const checkOrigin = request => {
  const origin = request.headers.get('Origin')
  const foundOrigin = allowedOrigins.find(allowedOrigin =>
    allowedOrigin.includes(origin),
  )
  return foundOrigin ? foundOrigin : allowedOrigins[0]
}

const corsHeaders = origin => ({
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Origin': origin,
})

export const JsonResponse = (item, status, req) => {
  const allowedOrigin = checkOrigin(req)
  return new Response(JSON.stringify(item), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      ...corsHeaders(allowedOrigin),
    },
  })
}
