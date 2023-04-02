import React from 'react'
import { useEffect } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
	const { results, isLoading, searchGoogle, searchTerm, searchType } = useResultContext()

	// useEffect(() => {
	// 	searchGoogle(searchTerm}, searchType)
	// }, [searchTerm, searchType, searchGoogle])


	if (isLoading) {
		return <Loading />
	}
	if (results?.statusCode === 200 && results.pageList.length > 0) {

		return (
			<div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
				{results?.pageList.map((object, index) => (
					<div key={index} className="md:w-2/5 w-full">
						<a href={object.url} target="_blank" rel='noreferrer'>
							<p className='text-sm'>
								{object.url > 30 ? object.url.substring(0, 30) : object.url}
							</p>
							<p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
								{object.title}
							</p>
						</a>
						<p>{object.paragraph}</p>
					</div>

				))}
			</div>
		)
	}
	else {
		return (
			<div className='flex justify-center items-center'>
				<p className='text-2xl'>No results</p>
			</div>
		)

	}

}

