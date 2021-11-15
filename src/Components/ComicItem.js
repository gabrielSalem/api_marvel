import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <img src={item.thumbnail.path+"/portrait_fantastic.jpg"} alt='' />
            <p>{item.title.substring(0,20)+"..."}</p>
            
            <div>
                <a href={"#"+item.id} classClass="buttonAdd" itemID={item.id}></a>
                <a href={"#"+item.id} classClass="buttonDetails" itemID={item.id}></a>
            </div>
        </div>
    )
}
export default CharacterItem;