import React from 'react';
import IconWithCount from 'components/IconWithCount';
import {useAppSelector} from 'hooks';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const {cart} = useAppSelector(state => state.product);

    const productsCount = cart.reduce((acc, productEntry) => {
        acc += productEntry.count;
        return acc;
    }, 0);

    return (
        <header className="header flex jc-sb">
            <a
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                <h1 className="header__title">QPICK</h1>
            </a>
            <div className="header__buttons flex">
                <a className="header__follow-heart-btn">
                    <IconWithCount img="heart.svg" count={3} />
                </a>
                <a
                    className="header__cart-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/cart');
                    }}
                >
                    <IconWithCount img="cart.svg" count={productsCount} />
                </a>
            </div>
        </header>
    );
};

export default Header;