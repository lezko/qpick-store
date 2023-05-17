import React from 'react';
import {useNavigate} from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer grid">
            <a
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                <h1 className="footer__title">QPICK</h1>
            </a>
            <ul className="flex" style={{flexDirection: 'column'}}>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
            </ul>
            <div className="flex" style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <span>Условия сервиса</span>
                <div className="footer__lang-bar flex">
                    <img src="/assets/icons/earth.svg" alt="earth" />
                    <ul className="flex">
                        <li>Каз</li>
                        <li className="active">Рус</li>
                        <li>Eng</li>
                    </ul>
                </div>
            </div>
            <ul className="footer__social flex">
                <li><img src="/assets/icons/vk.svg" alt="vk" /></li>
                <li><img src="/assets/icons/telegram.svg" alt="telegram" /></li>
                <li><img src="/assets/icons/whatsapp.svg" alt="whatsapp" /></li>
            </ul>
        </footer>
    );
};

export default Footer;