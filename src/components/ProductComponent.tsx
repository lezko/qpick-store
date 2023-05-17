import React, {FC} from 'react';
import {Product} from 'types/Product';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRub} from '@fortawesome/free-solid-svg-icons';
import {productSlice} from 'store/reducers/ProductSlice';
import {useAppDispatch} from 'hooks';

interface ProductComponentProps {
    product: Product;
}

const ProductComponent: FC<ProductComponentProps> = ({product}) => {
    const dispatch = useAppDispatch();
    const {addProduct, saveToLocalStorage} = productSlice.actions;

    const handleClick = () => {
        dispatch(addProduct(product.id));
        dispatch(saveToLocalStorage());
    };

    return (
        <div className="product">
            <img src={`/assets/img/${product.img}`} alt={product.title} className="product__image" />
            <div className="flex jc-sb">
                <h4 className="product__title">{product.title}</h4>
                <div className="product__price">
                    <span className="product__current-price">
                        {product.price} <FontAwesomeIcon icon={faRub} />
                    </span>
                    {product.prevPrice && <span className="product__prev-price">
                        {product.prevPrice} <FontAwesomeIcon icon={faRub} />
                    </span>}
                </div>
            </div>
            <div className="flex jc-sb">
                <span className="product__rate">
                    <img src="/assets/icons/star.svg" alt="star" />
                    <span>{product.rate}</span>
                </span>
                <button onClick={handleClick} className="product__button">Купить</button>
            </div>
        </div>
    );
};

export default ProductComponent;