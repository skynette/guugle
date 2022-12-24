import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
	const { results, isLoading, getResults, searchTerm } = useResultContext()
	const location = useLocation()
	const place = "Nigeria"
	useEffect(() => {
		// getResults(`q=${searchTerm}&location_name=Nigeria%2CNigeria%2CNigeria&location_parameters_auto=true`)
	}, [])


	if (isLoading) {
		return <Loading />
	}
	return (
		<div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
			{results?.data?.organic_results.map((object, index) => (
				<div key={index} className="md:w-2/5 w-full">
					<a href={object.url} target="_blank" rel='noreferrer'>
						<p className='text-sm'>
							{object.url > 30 ? object.url.substring(0, 30) : object.url}
						</p>
						<p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
							{object.title}
						</p>
					</a>
					<p>{object.desc}</p>
				</div>

			))}
		</div>
	)

}

