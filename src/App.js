import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Word from './components/Word';
import Header from './components/Header';


function App() {
  const [word, setWord] = useState('');
  const array = Array.from(word);
  const [correctLetter, setCorrectLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  console.log(wrongLetter)
  //const [arrayForShowLetter, setArrayForShowLetter] = useState(createNullArray(array.length))
 
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
        if(array[i] === key.toUpperCase()){
          setCorrectLetter(currentLetters => [...currentLetters, array[i]])
        }
      }
      if(!array.includes(key.toUpperCase())){
        setWrongLetter(wrongLetter + key.toUpperCase())
      }
      
    } else {
      alert('You must enter a letter beetwen A and Z')
    }
      
    }
    window.addEventListener('keydown', handleClick);
    return () => window.removeEventListener('keydown', handleClick)
  })
  return (
    <div className="App">
      {word}
      <Header />
      <div>
      <Word 
      word={word}
      correctLetter={correctLetter} />
      </div>
      <div className='wrong-letter'>
       
      {wrongLetter}
      </div>
    </div>
  );
}

export default App;
