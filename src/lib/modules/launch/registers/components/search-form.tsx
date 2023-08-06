import React, { useState, useEffect } from 'react'

import { MdSearch } from 'react-icons/md'
import { fetchPaginatedLaunches } from '../../../../context/redux/slices/launch/paginated-launches-slice.ts'
import { useAppDispatch } from '../../../../context/redux/hooks/redux-hooks.ts'

const SearchForm = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const search = urlParams.get('search')
    const page = Number(urlParams.get('page')) || 1

    if (search) {
      setSearchText(decodeURIComponent(search.replace(/\+/g, ' ')))
      dispatch(fetchPaginatedLaunches({ search: search, page: page }))
    }
  }, [dispatch])

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(searchText)
    let search = searchText

    if (searchText.toLowerCase() === 'falha') {
      search = 'false'
    } else if (searchText.toLowerCase() === 'sucesso') {
      search = 'true'
    }

    // Add search to the URL
    const url = new URL(window.location.href)
    url.searchParams.set('search', search)
    window.history.pushState({}, '', url.toString())

    dispatch(fetchPaginatedLaunches({ search: search }))
  }

  return (
    <form className="mb-8" onSubmit={handleSearchSubmit}>
      <label className="flex border-spaceblue-500 rounded-lg px-4 py-2 border justify-between items-center ">
        <input
          className="bg-transparent outline-0 text-spaceblue-500 placeholder:text-spaceblue-500 placeholder:tracking-widest"
          type="text"
          name="rocket-search"
          placeholder="PROCURAR"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">
          <MdSearch className="fill-spaceblue-500" size="20" />
        </button>
      </label>
    </form>
  )
}

export default SearchForm
