import React, {FC} from 'react';
import {CartProduct} from 'types/CartProduct';
import {faRub, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {productSlice} from 'store/reducers/ProductSlice';
import {useAppDispatch} from 'hooks';

interface CartProductComponentProps {
    cartProduct: CartProduct;
}

const CartProductComponent: FC<CartProductComponentProps> = ({cartProduct}) => {
    const dispatch = useAppDispatch();
    const {addProduct, deleteProduct, deleteCartProduct, saveToLocalStorage} = productSlice.actions;

    return (
        <div className="cart-product">
            <div className="left">
                <img src={`/assets/img/${cartProduct.product.img}`} alt={cartProduct.product.title} />
                <div className="cart-product__controls">
                    <button onClick={() => {
                        dispatch(addProduct(cartProduct.product.id));
                        dispatch(saveToLocalStorage());
                    }} className="plus"><FontAwesomeIcon icon={faPlus} /></button>
                    <span className="cart-product__count">{cartProduct.count}</span>
                    <button onClick={() => {
                        if (cartProduct.count > 1) {
                            dispatch(deleteProduct(cartProduct.product.id));
                            dispatch(saveToLocalStorage());
                        }
                    }} className="minus"><FontAwesomeIcon icon={faMinus} /></button>
                </div>
            </div>
            <div className="right">
                <div>
                    <h4 className="cart-product__title">{cartProduct.product.title}</h4>
                    <span className="cart-product__price-single">
                    {cartProduct.product.price} <FontAwesomeIcon icon={faRub} />
                </span>
                </div>
            </div>

            <button
                onClick={() => {
                    dispatch(deleteCartProduct(cartProduct.product.id));
                    dispatch(saveToLocalStorage());
                }}
                className="cart-product__delete-button"
            >
                <img src="/assets/icons/trash.svg" alt="delete" />
            </button>
            <span className="cart-product__price-all">
                {cartProduct.product.price * cartProduct.count} <FontAwesomeIcon icon={faRub} />
            </span>
        </div>
    );
};

export default CartProductComponent;