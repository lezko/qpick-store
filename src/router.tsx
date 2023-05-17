import {createBrowserRouter} from 'react-router-dom';
import MainPage from 'pages/MainPage';
import CartPage from 'pages/CartPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    }
]);