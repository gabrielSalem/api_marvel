import React,{useState} from 'react';

const ComcicItem = ({item}) => {
    let img = item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension
    let title = item.title;

    const [modal, setModal] = useState(false);

    const showHiddenModal = () => {
        setModal(!modal);
    };   

    if(modal) {
        document.body.classList.add('active-modal');
    } else {        
        document.body.classList.remove('active-modal');
    }
    
    return (
        <>
        <div className="card">
            <img src={img} title={title} />
            <p className="titleComic">{item.title.substring(0,20)+"..."}</p>
            <a onClick={showHiddenModal} className="buttonModal">Detalhes</a>

            {modal && (
                <div className="modal">
                    <div onClick={showHiddenModal} className="overlay"></div>
                    <div className="modal-content">
                        <a href={"#"+item.id} 
                           className="closeModal" 
                           onClick={showHiddenModal}>
                               <span aria-hidden="true">&times;</span>
                        </a>
                        <h3 className="titleModal">{item.title}</h3>
                        <img src={img} title={item.title} className="imgModal"/>
                        <p className="descriptionModal">{item.description}</p>
                    </div>
                </div>
            )}

        </div>
        </>
    )
}

export default ComcicItem;