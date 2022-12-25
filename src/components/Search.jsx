import React from 'react'
import { Links } from './Links'
import { useResultContext } from '../contexts/ResultContextProvider'


export const Search = () => {
  const { getResults, searchTerm, setSearchTerm } = useResultContext()

  const gSearch = (searchTerm) => {
    getResults(`query=${searchTerm}`)
  }

  return (
    <div className='relative sm:ml-48 md:ml-72 md:w-50 sm:-mt-10 mt-3'>
      <input
        value={searchTerm} type="text" className='sm:w-96 w-80 h-10 dark:bg-gray-200 border-none focus:outline-none rounded-full shadow-sm outine-none p-6 text-black hover:shadow-lg'
        placeholder="Seach Guuuuuuugle"
        onChange={(event) => { setSearchTerm(event.target.value) }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            gSearch(searchTerm)
          }
        }}
      />
      {searchTerm && (
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={() => setSearchTerm("")}>
          X
        </button>
      )}
      <Links />
    </div>
  )
}
