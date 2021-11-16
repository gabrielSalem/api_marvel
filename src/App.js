import './App.css';
import Header from "./Components/Header";
import Characters from "./Components/Comics";
import Search from "./Components/Search";
import axios from 'axios';
import React, { useEffect,useState } from 'react';

const publicKey = "09101f53f5a25fd1329df876511dbf77"
const hash = "b8d4f7e138e651d542c879a021a7c7ae";

function App() {
   // eslint-disable-next-line no-unused-vars
   const[items,setItems] = useState([]);
   // eslint-disable-next-line no-unused-vars
   const[isLoading,setLoading] = useState(true);
   const[query,setQuery] = useState("");
   
   useEffect(()=>{
      const fetch = async()=>{
         if(query === ''){
            const result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`)
            setItems(result.data.data.results);
            setLoading(false);
         }else{
            const result = await axios(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`)
            setItems(result.data.data.results);
            setLoading(false);
         }      
      }
   fetch()},[query]);

   return (
    <div className="App">
      <Header></Header>
      <Search search={(term)=>{setQuery(term)}}/>
      <article>
         <Characters items={items} isLoading={isLoading}/>            
      </article>      
    </div>
  );
}

export default App;
