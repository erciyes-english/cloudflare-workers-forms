export const JsonResponse = (item, status) => {
  return new Response(JSON.stringify(item), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
