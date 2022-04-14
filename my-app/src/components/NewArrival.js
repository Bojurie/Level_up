import React, {useState } from 'react'

function NewArrival() {
 const [ suggestions, setNewSuggestions ] = useState('');

  
  const clickHandler = () => {
    console.log('Handing CLick')
  }
  return (
    <div>
      <input placeholder="Add Suggestion" />
      <button onClick={clickHandler}>Add</button>

    </div>
  )
}

export default NewArrival;
