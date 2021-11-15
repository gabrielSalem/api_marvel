import React from 'react';
import ComicItem from './ComicItem';

const Comics = ({ items, isLoading }) => {
    return isLoading ? 
        <div className="loading"></div> :
        items.map(item => (
            <ComicItem key={item.id} item={item} ></ComicItem>
        ));
}
export default Comics;