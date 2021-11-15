import React, {useState} from "react";

const Search = ({ search }) =>{
    const[text,setText] = useState('');
    const onSearch = (term) => {
        setText(term);
        search(term)
    }
    return (
        <section className="search">
            <form >
                <input type="text" 
                       className="form-control"
                       placeholder="Procure o que precisa"
                       autoFocus
                       onChange={(e)=>onSearch(e.target.value)}
                       value={text}/>
            </form>
        </section>
    )
}

export default Search;