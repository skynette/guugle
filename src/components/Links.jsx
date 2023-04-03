import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
	{ url: '/search', text: '🔎 All' },
	{ url: '/news', text: '📰 News' },
	{ url: '/images', text: '🖼️ Images' },
	{ url: '/videos', text: '🎥 Videos' },
]

export const Links = ({ onLinkClick }) => {
	console.log("links mounted");
	const handleLinkClick = (event, linkText) => {
		event.preventDefault()
		onLinkClick(linkText.slice(3).trim().toLowerCase())
	}
	return (
		<div className='flex sm:justify-around justify-between items-center mt-4'>
			{links.map(({ url, text }, index) => (
				<NavLink to={url} key={index} className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : 'm-2 mb-0')}
					onClick={(event) => handleLinkClick(event, text)}
				>
					{text}
				</NavLink>
			))}
		</div>
	)
}
