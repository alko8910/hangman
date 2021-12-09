import React from 'react'

const Letter = () => {
   const keyPress = () => {
       console.log('aa')
   }
    return (
        <div className='letter' onKeyPress={(e) => keyPress(e)}>
            
        </div>
    )
}

 export default Letter
