import React from 'react'

const CharacterItem = ({item}) => {
    
    return (
        <div className="card">
            <img src={item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension} alt={item.title} />
            <p>{item.title.substring(0,20)+"..."}</p>
        </div>
    )
}
export default CharacterItem;