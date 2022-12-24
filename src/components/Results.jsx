import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
	const { results, isLoading, getResults, searchTerm } = useResultContext()
	const location = useLocation()
	const place = "Nigeria"
	useEffect(() =>{
		// getResults(`q=food&location_name=Nigeria%2CNigeria%2CNigeria&location_parameters_auto=true`)
		console.log(place)
	}, [])

	if (isLoading) {
		console.log("Loading") 
		return <Loading />
	}

	switch (location.pathname) {
		case '/search':
			return (
				<div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
					{results?.results?.map((object) => (
						<p>{object}</p>
					))}
				</div>
			)
		case '/news':
			return 'NEWS'
		case '/videos':
			return 'VIDEOS'
		case '/search':
			return 'SEARCH'

		default:
			return 'ERROR'
	}
}
