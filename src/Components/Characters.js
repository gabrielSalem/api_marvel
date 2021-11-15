import React from 'react';
import CharacterItem from './CharacterItem';

const Characters = ({ items, isLoading }) => {
    return isLoading ? <center><h1>Loading ...</h1></center> :
    <section className="contents">
        {
            items.map(item => (
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
        }
    </section>
}

export default Characters;