import React, {FC} from 'react';

interface IconWithCountProps {
    img: string;
    count: number;
}

const IconWithCount: FC<IconWithCountProps> = ({img, count}) => {
    return (
        <div className="icon-with-count">
            {count ? <span className="icon-with-count__count">{count}</span> : ''}
            <img alt={img} src={`/assets/icons/${img}`} />
        </div>
    );
};


export default IconWithCount;