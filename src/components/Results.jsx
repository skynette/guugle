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

	switch (location.pathname) {
		case '/search':
			return (
				<div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
					{results?.data?.map((object) => (
						<p>{object}</p>
					))}
				</div>
			)
		case '/news':
			return 'NEWS'
		case '/videos':
			return 'VIDEOS'
		default:
			return 'ERROR'
	}
}

