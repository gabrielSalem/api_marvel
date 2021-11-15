import './App.css';
import Header from "./Components/Header";
import Characters from "./Components/Characters";
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
   const[query,setQuery] = useState("")

   useEffect(()=>{
      const fetch = async()=>{
      if(query === ''){
         const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`)
         // console.log(result.data.data.results);
         setItems(result.data.data.results);
         setLoading(false);
      }else{
         const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`)
         // console.log(result.data.data.results);
         setItems(result.data.data.results);
         setLoading(false);
      }
      
      }
      fetch()
   },[query]);

   return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
         {/* <nav>
            <ul>
               <li>
                  <a href="#a" title="Quadrinhos" data-item="Quadrinhos">Quadrinhos</a>
               </li>
               <li>
                  <a href="#b" title="Personagem" data-item="Personagem">Personagens</a>
               </li>
            </ul>
         </nav>       */}
      </header>
      <article>
         {/* <input type="search"/> */}
         <div className="list-card">
            <Search search={(term)=>{setQuery(term)}}/>
            <Characters items={items} isLoading={isLoading} />            
         </div>
      </article>
      {/* <footer>
         <h3>Gabriel SA</h3>
         <ul>
            <li><strong>Linkedin:</strong></li>
            <li><strong>Github:</strong></li>
            <li><strong>Instagram:</strong></li>
         </ul>
      </footer> */}
    </div>
  );
}

export default App;
