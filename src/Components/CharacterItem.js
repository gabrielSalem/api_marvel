import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <span>
            <img src={item.thumbnail.path+"/portrait_incredible.jpg"} alt='' />  
        </span>
    )
}
export default CharacterItem;