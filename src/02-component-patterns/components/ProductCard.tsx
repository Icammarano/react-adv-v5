import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	className?: string;
	product: Product;
	children?: React.ReactElement | React.ReactElement[];
	style?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {

	const { counter, increaseBy } = useProduct();

	return (
		<Provider value={{
			counter,
			increaseBy,
			product
		}}>
			<div className={ `${ styles.productCard } ${ className }` }
				style={ style }
			>	
				{ children }
			</div>
		</Provider>
 	)
}