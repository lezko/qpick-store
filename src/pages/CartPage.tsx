import React, {useEffect} from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {useAppDispatch, useAppSelector} from 'hooks';
import {faRub} from '@fortawesome/free-solid-svg-icons';
import CartProductComponent from 'components/CartProductComponent';
import {productSlice} from 'store/reducers/ProductSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CartPage = () => {
    const {loadFromStorage} = productSlice.actions;
    const dispatch = useAppDispatch();
    const {cart} = useAppSelector(state => state.product);
    const cost = cart.reduce((acc, c) => {
        acc += c.product.price * c.count;
        return acc;
    }, 0);

    useEffect(() => {
        dispatch(loadFromStorage());
    }, []);

    return (
        <div style={{
            flexGrow: 1,
            // display: 'grid',
            // gridTemplateRows: 'auto 1fr auto',
        }}>
            <div className="container">
                <Header />
            </div>
            <div className="container" style={{
                minHeight: 'calc(100vh - 195px)'
            }}>
                <h2 style={{
                    fontSize: '20px',
                    fontWeight: 600
                }}>Корзина</h2>
                <div className="grid-container grid">
                    <ul className="cart-product-list">
                        {cart.map(c =>
                            <li key={c.product.id}>
                                <CartProductComponent cartProduct={c} />
                            </li>
                        )}
                    </ul>
                    <div className="final-cost-parent">
                        <div className="final-cost">
                            <div className="flex jc-sb">
                                <span>ИТОГО</span>
                                <span>{cost} <FontAwesomeIcon icon={faRub} /></span>
                            </div>
                        </div>
                        <button className="submit-btn">Перейти к оформлению</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Footer />
            </div>
        </div>
    );
};

export default CartPage;