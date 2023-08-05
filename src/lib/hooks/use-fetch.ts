import axios from 'axios'

const default_url = process.env.SERVER_URL || 'http://127.0.0.1:5000'

type UseFetchParams = {
  url?: string
  route?: string
  params?: Record<string, any>
}

export const useFetch = async ({
  url = default_url,
  route = '',
  params = {}
}: UseFetchParams) => {
  const cleanedUrl = url.endsWith('/') ? url.slice(0, -1) : url
  const cleanedRoute = route.startsWith('/') ? route.slice(1) : route

  const requestUrl = `${cleanedUrl}/${cleanedRoute}`

  try {
    return await axios.get(requestUrl, { params })
  } catch (error: any) {
    throw new Error(`Request to ${requestUrl} failed: ${error.message}`)
  }
}
