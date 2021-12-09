import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Word from './components/Word';
import Header from './components/Header';
function App() {

const [word, setWord] = useState('')
 


  useEffect(() => {
    axios.get('https://random-word-api.herokuapp.com/word?number=1', {
      
    }).then((word) => {
      const wordUpper = word.data
      setWord(wordUpper[0].toUpperCase())
    })
 
    .catch(err => console.log(err))

  },[])


  return (
    <div className="App">
      <Header />
      {word}

      <Word word={word} />
    </div>
  );
}

export default App;
