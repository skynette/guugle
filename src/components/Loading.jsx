import React from 'react'
import {Rings} from 'react-loader-spinner'

export const Loading = () => {
	return (
		<div className='flex justify-center items-center'>
			<ColorRing type="Puff" color="#00BFF" height={550} width={80} />
		</div>
	)
}
