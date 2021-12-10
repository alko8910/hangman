import React from 'react'
import Letter from './Letter'

const Word = ({word, correctLetter}) => {
    const wordToCreateUnderlines = (word.word);
    const arr = Array.from(word)
        
    return (
        <div className='word'>
            {arr.map((letter, i) => {
                return (
                    <span className='letter' key={i}>
                        {correctLetter.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default Word;