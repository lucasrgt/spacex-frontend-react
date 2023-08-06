import { renderHook } from '@testing-library/react'
import { useFetch } from '../../../src/lib/hooks/use-fetch'
import { it, afterEach, describe, vi, expect } from 'vitest'
import axios from 'axios'

vi.mock('axios')

const defaultUrl = process.env.SERVER_URL || 'http://127.0.0.1:5000'

describe('useFetch Hook', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should call axios.get with the correct url when '/' route is provided", async () => {
    // arrange
    const route = '/'
    const expectedUrl = `${defaultUrl}/`

    vi.mocked(axios.get).mockResolvedValue({ data: '' })

    // act
    renderHook(() => useFetch({ route: route }))

    // assert
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, { params: {} })
  })

  it('should call axios.get with the correct url when a valid route is provided', async () => {
    // arrange
    const route = '/valid_route'
    const expectedUrl = `${defaultUrl}/valid_route`

    vi.mocked(axios.get).mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: route }))

    // assert
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, { params: {} })
  })

  it('should call axios.get with the correct url when a valid route with valid params is provided', async () => {
    // arrange
    const route = '/valid_route'
    const params = { search: 'valid_search' }
    const expectedUrl = `${defaultUrl}/valid_route`

    vi.mocked(axios.get).mockResolvedValue({ data: {} })

    // act
    renderHook(() => useFetch({ route: route, params: params }))

    // assert
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, { params })
  })
})
