import React from 'react'

const Won = ({newGame}) => {
    return (
        <div className='lost-div win-div'>
            <div>
                <div>
                    Congratulations! You won!
                </div>   
                <div>
                    <button onClick={newGame}>
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Won
    