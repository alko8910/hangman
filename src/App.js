import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Word from './components/Word';
import Header from './components/Header';
function App() {

const [word, setWord] = useState('')
const array = Array.from(word)
console.log(array)

  useEffect(() => {
    axios.get('https://random-word-api.herokuapp.com/word?number=1', {
      
    }).then((word) => {
      const wordUpper = word.data
      setWord(wordUpper[0].toUpperCase())
    })
 
    .catch(err => console.log(err))

  },[])

useEffect(() =>{
  
 
  const handleClick = (event) => {
    const {key, keyCode} = event;
   if(keyCode >= 65 && keyCode <= 90){
     for(let i = 0; i < word.length; i++){
       if(array[i] == key.toUpperCase()){
         
       }
     }
   }
    
  }
  window.addEventListener('keydown', handleClick);
  return () => window.removeEventListener('keydown', handleClick)
})
  return (
    <div className="App">
      <Header />
      {word}

      <Word word={word} />
    </div>
  );
}

export default App;
