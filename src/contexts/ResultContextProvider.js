import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ResultContext = createContext()
// const baseUrl = 'https://google-search-engine1.p.rapidapi.com/api/search?'

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [searchType, setSearchType] = useState('')

	const searchGoogle = async (query, searchType = '') => {
		console.log("searching for results");
		setIsLoading(true)

		const SERP_API_KEY = '';
		const url = 'https://serpapi.com/search';
	
		// initialize variables
		let searchResultsKey = '';
	
		const params = {
			engine: 'google',
			q: query,
			filter: '0',
			num: '10',
			api_key: SERP_API_KEY,
		};
	
		let resultKeys = ['title', 'link', 'snippet'];
	
		if (searchType === 'videos') {
			params.tbm = 'vid';
			searchResultsKey = 'video_results'; // Key for search results in API response
			resultKeys = ['title', 'link', 'thumbnail', 'snippet', 'rich_snippet', 'video_link']; // Keys to extract from search results
		} else if (searchType === 'news') {
			params.tbm = 'nws';
			searchResultsKey = 'news_results';
			resultKeys = ['title', 'link', 'source', 'date', 'snippet', 'thumbnail'];
		} else if (searchType === 'images') {
			params.tbm = 'isch';
			params.ijn = '0';
			searchResultsKey = 'images_results';
			resultKeys = ['thumbnail', 'source', 'title', 'link', 'original'];
		} else {
			// Default to organic search if no searchType provided
			searchResultsKey = 'organic_results';
		}
	
		try {

			const response = await axios.get(url, {
				params: params,
			});
	
			const data = response.data;
	
			// Extract search metadata and search information
			const metadata = data.search_metadata;
			const searchInfo = searchType !== 'images' ? {
				total_results: data.search_information.total_results,
				time_taken: data.search_information.time_taken_displayed,
			} : {};
	
			// Extract results based on searchType
			let searchResults = data[searchResultsKey];
			let count = searchResults.length;
	
			// If there are fewer than 20 results, and pagination information is available, fetch more results
			while (count < 20 && data.serpapi_pagination) {
				const searchParams = { api_key: SERP_API_KEY, ...params, start: count + 1 };
				const searchUrl = 'https://serpapi.com/search';
	
				const searchResponse = await axios.get(searchUrl, {
					params: searchParams,
				});
	
				const searchData = searchResponse.data;
				searchResults.push(...searchData[searchResultsKey]);
				count = searchResults.length;
			}
	
			// Extract relevant result information based on searchType
			const resultsList = searchResults.map((result) => {
				const resultInfo = {};
				resultKeys.forEach((key) => {
					if (key in result) {
						resultInfo[key] = JSON.stringify(result[key]);
					}
				});
				return resultInfo;
			});
			
			const totalResults = searchResults.length;
			const searchOutput = { total_results: totalResults, results: resultsList };
			
			setResults(searchOutput)
			setIsLoading(false)
	
		} catch (error) {
			console.error(error);
			setIsLoading(false)
		}
		
	}


	return (
		<ResultContext.Provider value={{ searchGoogle, results, searchTerm, searchType, setSearchTerm, setSearchType, isLoading }}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext)