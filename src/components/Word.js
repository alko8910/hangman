import React from 'react'
import Letter from './Letter'

const Word = (word) => {
    const wordToCreateUnderlines = (word.word);
    const array = Array.from(word.word)
    console.log(array)
        
    return (
        <div className='word'>
            {array.map((arr, i) => <Letter  key={i}/> )}
        </div>
    )
}

export default Word