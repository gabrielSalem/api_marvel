import React from 'react';
import CharacterItem from './ComicItem';

const Characters = ({ items, isLoading }) => {
    return isLoading ? 
        <div className="loading"></div> :
        items.map(item => (
            <CharacterItem key={item.id} item={item}></CharacterItem>
        ));
}
export default Characters;