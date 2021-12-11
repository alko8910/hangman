import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Word from './components/Word';
import Header from './components/Header';
import Lost from './components/Lost';
import Won from './components/Won';
import Figure from './components/Figure';

function App() {
  const [word, setWord] = useState('');
  const array = Array.from(word);
  const [correctLetter, setCorrectLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const [newGameClick, setNewGameClick] = useState(true);

  useEffect(() => {
    axios.get('https://random-word-api.herokuapp.com/word?number=1', {
      
    }).then((word) => {
      const wordUpper = word.data
      setWord(wordUpper[0].toUpperCase())
    })
    .catch(err => console.log(err))
  },[newGameClick])
  

  useEffect(() =>{
    
      const handleClick = (event) => {
        const {key, keyCode} = event;
        const keyToUpperCase = key.toUpperCase();
        if ( wrongLetter.length < 6 && correctLetter.length !== word.split('').length) {
          if(keyCode >= 65 && keyCode <= 90){
  
          if(correctLetter.length === word.split('').length - 1){
            console.log('aa')
          }
       
        if(wrongLetter.includes(keyToUpperCase) || correctLetter.includes(keyToUpperCase)){
          alert('You have already entered this letter')
          return;
        
        } else if (!array.includes(keyToUpperCase)){
          setWrongLetter(wrongLetter + keyToUpperCase)
        }
  
        for(let i = 0; i < word.length; i++){
          if(array[i] === keyToUpperCase){
            setCorrectLetter(currentLetters => [...currentLetters, array[i]])
          }
        }
        } else {
        return;
      }
      
      }
    }
   
    window.addEventListener('keydown', handleClick);
    return () => window.removeEventListener('keydown', handleClick)
  })
  
  const newGame = () => {
    setCorrectLetter([])
    setWrongLetter([])
    setNewGameClick(!newGameClick)
  }

  return (
    <div className="App">
      <Header />
      <Word 
        correctLetter={correctLetter} 
        word={word}
      />
 
      <div className='wrong-letter'>
        { (wrongLetter.length > 0 && wrongLetter.length < 6 && correctLetter.length !== word.split('').length) &&
          `Wrong: ${wrongLetter.split('')}`
        }  
      </div>

      {
        wrongLetter.length === 6 &&
        <Lost word={word} newGame={newGame}/>
      }
      { 
        (correctLetter.length === word.split('').length) &&
        <Won newGame={newGame}/>
      }
      
      <Figure wrongLetter={wrongLetter}/>
    </div>
  );
}

export default App;
