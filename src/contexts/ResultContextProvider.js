import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext()
const baseUrl = 'https://g-search.p.rapidapi.com/search?'
// https://g-search.p.rapidapi.com/search?q=food&location_name=London%2COntario%2CCanada&location_parameters_auto=true
export const ResultContextProvider = ({children}) => {
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const getResults = async (query)=>{
		setIsLoading(true)

		const response = await fetch(`${baseUrl}${query}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '1ad3108dbamsh42c339f8dcac422p100c28jsnd360b48a35a9',
				'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
			}
		})
		const data = await response.json()
		console.log(data)
		setResults(data)
		setIsLoading(false)
	}
	return (
		<ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext)