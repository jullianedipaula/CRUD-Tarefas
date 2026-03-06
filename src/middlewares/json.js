export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const content = Buffer.concat(buffers).toString()

  try {
    req.body = content ? JSON.parse(content) : null
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}
