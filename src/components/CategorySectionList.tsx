import React from 'react';
import {useAppSelector} from 'hooks';
import CategorySection from 'components/CategorySection';

const CategorySectionList = () => {
    const {products} = useAppSelector(state => state.product);
    const categorySet = products.reduce((set: Set<string>, p) => {
        set.add(p.category);
        return set;
    }, new Set<string>);

    return (
        <ul className="category-section-list">
            {Array.from(categorySet).map(c =>
                <li key={c}>
                    <CategorySection category={c} />
                </li>
            )}
        </ul>
    );
};

export default CategorySectionList;