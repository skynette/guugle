import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext()
const baseUrl = 'https://g-search.p.rapidapi.com/search?'

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
				'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
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



// // This code defines a custom context called ResultContext using the createContext function from the react package.
// // The context is used to share state and functions related to search results between components in a React application.

// // The ResultContextProvider component is a function component that provides the ResultContext to its children.
// It uses the useState hook to define three pieces of state: results, isLoading, and searchTerm.

// // The results state is an array that stores the search results returned from the API. The isLoading state is a boolean that
// indicates whether the search is currently in progress. The searchTerm state is a string that stores the current search term.

// // The ResultContextProvider component also defines a function called getResults, which is used to perform a search and fetch
// the results from the API. This function uses the fetch function to make a GET request to the API, and it stores the returned data in the results state using the setResults function. The isLoading state is also updated to reflect the current status of the search.

// // Finally, the ResultContextProvider component returns a ResultContext.Provider element, which is used to provide the ResultContext
// to its children. The value prop of the Provider element is an object that contains the getResults, results, searchTerm, setSearchTerm, and isLoading values, which can be accessed by the children using the useContext hook.

// // The useResultContext function is a custom hook that makes it easier to access the ResultContext from any component.
//  It simply calls the useContext hook with the ResultContext object as an argument. This allows components to access the getResults, results, searchTerm,
//  setSearchTerm, and isLoading values simply by calling useResultContext().