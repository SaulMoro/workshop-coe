// Pide JSON a la API simulada. Reenvía ?delay y ?fail de la página,
// así /usuarios?delay=2000 o /usuarios?fail=1 cambian la respuesta.
export async function getJson<T>(path: string): Promise<T> {
  const page = new URLSearchParams(window.location.search)
  const query = new URLSearchParams()
  for (const key of ['delay', 'fail']) {
    const value = page.get(key)
    if (value !== null) query.set(key, value)
  }
  const url = query.size > 0 ? `${path}?${query}` : path

  const response = await fetch(url)
  if (!response.ok) throw new Error(`${response.status} en ${path}`)
  return (await response.json()) as T
}
