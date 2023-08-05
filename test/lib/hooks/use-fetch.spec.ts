import axios from 'axios'
import { renderHook } from '@testing-library/react'
import { useFetch } from '../../../src/lib/hooks/use-fetch'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const defaultUrl = 'http://127.0.0.1:5000'

describe('useFetch Hook', () => {
  afterEach(() => {
    mockedAxios.get.mockClear()
  })

  test("should call axios.get with the correct url when '/' route is provided", async () => {
    // arrange
    const route = '/'
    const expectedUrl = `${defaultUrl}/`

    mockedAxios.get.mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: route }))

    // assert
    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, { params: {} })
  })

  test('should call axios.get with the correct url when a valid route is provided', async () => {
    // arrange
    const route = '/valid_route'
    const expectedUrl = `${defaultUrl}/valid_route`

    mockedAxios.get.mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: route }))

    // assert
    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, { params: {} })
  })
  test('should call axios.get with the correct url when a valid route with valid params is provided', async () => {
    // arrange
    const route = '/valid_route'
    const params = { search: 'valid_search' }
    const expectedUrl = `${defaultUrl}/valid_route`

    mockedAxios.get.mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: route, params: params }))

    // assert
    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, { params })
  })
})
