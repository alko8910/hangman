import React from 'react'

const Word = ({word, correctLetter}) => {
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