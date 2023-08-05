import axios from 'axios'

const default_url = process.env.SERVER_URL || 'http://127.0.0.1:5000'

type UseFetchParams = {
  url?: string
  route?: string
  params?: string
}
export const useFetch = async ({
  url = default_url,
  route = '',
  params = ''
}: UseFetchParams) => {
  const requestUrl = `${url}/${route === '/' ? '' : '/' + route}${
    params ? encodeURIComponent(params) : ''
  }`

  try {
    return await axios.get(requestUrl)
  } catch (error: any) {
    throw new Error(`Request to ${requestUrl} failed: ${error.message}`)
  }
}
