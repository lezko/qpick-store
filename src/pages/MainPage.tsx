import React, {useEffect} from 'react';
import Header from 'components/Header';
import {useAppDispatch, useAppSelector} from 'hooks';
import {fetchProducts} from 'store/reducers/ActionCreators';
import CategorySectionList from 'components/CategorySectionList';
import Footer from 'components/Footer';
import {productSlice} from 'store/reducers/ProductSlice';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const {loadFromStorage} = productSlice.actions;

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(loadFromStorage());
    }, []);

    return (
        <div>
            <div className="container">
                <Header />
            </div>
            <div className="container">
                <CategorySectionList />
            </div>
            <div className="container">
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;