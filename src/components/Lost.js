import React from 'react'

const Lost = ({word, newGame}) => {
    return (
        <div className='lost-div'>
            <div  className='lost-div2'>
                <div>
                    Unfortunately you lost.
                </div>
                <div>
                ...the word was:
                 <div >{word}</div>
                </div>
                <div>
                    <button onClick={newGame}>
                        Play again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Lost
