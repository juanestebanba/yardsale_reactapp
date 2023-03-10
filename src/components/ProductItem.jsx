import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }
  
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src="src/assets/icons/bt_add_to_cart.svg" alt="" />
				</figure>
      </div>
		</div>
	);
}

export default ProductItem;