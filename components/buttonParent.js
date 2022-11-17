import { useState, useEffect } from 'react'
import Button from '../components/button'

export default function ButtonParent() {
  const [totalClicks, setTotalClicks] = useState(0);

  const incrementTotalClicks = () => {
    setTotalClicks(totalClicks + 1)
  }

  useEffect(() => {
    const colors = ['blue','green','red']
    if (totalClicks >=1 && totalClicks <10) {
      document.body.style.backgroundColor = colors[0]
    } else if (totalClicks >= 10 && totalClicks <20) {
      document.body.style.backgroundColor = colors[1]
    } else {
      document.body.style.backgroundColor = colors[2]
    }

  },[totalClicks])


  return (
    <div>
      <h1>Sup dog</h1>
      <Button title='Button 1 ' incrementTotalClicks={incrementTotalClicks}/>
      <Button title='Button 2  ' incrementTotalClicks={incrementTotalClicks}/>
      <Button title='Button 3  ' incrementTotalClicks={incrementTotalClicks}/>
    <h2>-----TOTAL CLICKS: {totalClicks}-----</h2>
    </div>
  )
}
