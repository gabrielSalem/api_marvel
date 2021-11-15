import React,{useState} from 'react';
import axios from 'axios'
// import fileDownload from 'https://'

const ComcicItem = ({item}) => {
    // Results
    let img = item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension;
    let title = item.title;
    let description = item.description;
    // Modal
    const [modal, setModal] = useState(false);
    const showHiddenModal = () => {
        setModal(!modal);
    };   
    if(modal) {
        document.body.classList.add('active-modal');
    } else {        
        document.body.classList.remove('active-modal');
    }
    // downlaod IMG
    function download(url,title) {
        axios({
            url: url,
            method: 'GET',
            responseType: 'blob'
        })
            .then((response) => {
                    const url = window.URL
                        .createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', title+'.jpg');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
            })
    }

    return (
        <>
            {/* === Card === */}
            <div className="card">
                <img src={img} className="imgComic" idName={item.id} title={title}/>
                <p className="titleComic" title={description}>{title.substring(0,20)+"..."}</p>
                <div className="buttons">
                    <a onClick={showHiddenModal} className="buttonModal">Detalhes</a>
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/download--v1.png" onClick={()=>download(img,title)}/>
                </div>
            {/* === Modal ===  */}
            {modal && (
                <div className="modal">
                    <div onClick={showHiddenModal} className="overlay"></div>
                    <div className="modal-content">
                        <a href={"#"+item.id} 
                           className="closeModal" 
                           onClick={showHiddenModal}>
                               <span aria-hidden="true">&times;</span>
                        </a>
                        <h3 className="titleModal">{title}</h3>
                        <img src={img} title={title} className="imgModal"/>
                        <p className="descriptionModal">{description}</p>                        
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default ComcicItem;