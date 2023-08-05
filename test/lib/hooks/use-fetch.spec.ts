import axios from 'axios'
import { renderHook } from '@testing-library/react'
import { useFetch } from '../../../src/lib/hooks/use-fetch'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('useFetch Hook', () => {
  it("should call axios.get with the correct url when '/' route is provided", async () => {
    // arrange
    const mockRoute = '/'
    const expectedUrl = 'http://127.0.0.1:5000/'

    mockedAxios.get.mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: mockRoute }))

    // assert
    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl)
  })
})
