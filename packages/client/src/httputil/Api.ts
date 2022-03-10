import type { ApiPayload } from '../dataStructure'
import { putCities, setCities, setError, setIsLoading } from '../store'

const getHeaders = (): HeadersInit => {
  const headers = new Headers()
  headers.append('accept', 'application/json; charset=utf-8')
  headers.append('Content-Type', 'application/json')

  return headers
}

export const sendApiCall = ({ method = 'GET', dispatch, urlData, payload }: ApiPayload): void => {
  const fetchData = async () => {
    try {
      const url = `/cities${urlData}`
      const headers = getHeaders()

      let requestPayload = {
        method,
        headers,
      }
      //TODO Uncomment if PUT call want loding icon
      // setIsLoading(dispatch, true)
      switch (method) {
        case 'GET':
          setIsLoading(dispatch, true)
          // eslint-disable-next-line
          const response = await fetch(url, requestPayload)
          // eslint-disable-next-line
          const data = await response.json()
          setCities(dispatch, data.cities || [])
          return
        case 'PUT':
          requestPayload = { ...requestPayload, ...{ body: JSON.stringify(payload) } }
          // eslint-disable-next-line
          const putRes = await fetch(url, requestPayload)
          // eslint-disable-next-line
          const city = await putRes.json()
          putCities(dispatch, city)
          return
        default:
          setError(dispatch, 'Unsupported HTTP method')
          return
      }
      // eslint-disable-next-line
    } catch (error: any) {
      setError(dispatch, error)
    }
  }
  fetchData()
}
