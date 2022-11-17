import React, {useState} from 'react'

// Parent of props - index.js
function Button (props) { 

  //variables here
  const [numOfClicks, setNumOfClicks] = useState(0);
  const handleClick = () => {
    setNumOfClicks(numOfClicks + 1)
    props.incrementTotalClicks();
    console.log('clicked ' + numOfClicks)
  }

  return (
    <>
    <button onClick={handleClick}>{props.title}</button>
    <span> {props.title} clicked {numOfClicks} times</span>
    <br />

    </> 
  )
}

export default Button