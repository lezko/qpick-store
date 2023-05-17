import React, {FC} from 'react';
import {useAppSelector} from 'hooks';
import ProductComponent from 'components/ProductComponent';

interface CategorySectionProps {
    category: string;
}

const CategorySection: FC<CategorySectionProps> = ({category}) => {
    const {products} = useAppSelector(state => state.product);

    const mathingProducts = products.filter(p => p.category === category);

    return (
        <div className="category-section">
            <h5 className="category-section__title">{category}</h5>
            <ul className="category-section__list">
                {mathingProducts.map(p =>
                    <li key={p.id}>
                        <ProductComponent product={p} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CategorySection;