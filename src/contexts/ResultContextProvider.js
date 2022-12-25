import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext()
const baseUrl = 'https://google-search-engine1.p.rapidapi.com/api/search?'

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const getResults = async (query) => {
		setIsLoading(true)

		const response = await fetch(`${baseUrl}${query}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'google-search-engine1.p.rapidapi.com'
			}
		})
		const data = await response.json()
		setResults(data)
		setIsLoading(false)
	}
	return (
		<ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext)


