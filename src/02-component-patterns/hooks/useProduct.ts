import { useState } from 'react';

export const useProduct = (initialState = 0) => {
	
	const [counter, setCounter] = useState(initialState)

	const increaseBy = (value: number) => {
		setCounter( prev => Math.max(prev + value, 0))
	}

	return {
		counter,
		increaseBy
	}

}
