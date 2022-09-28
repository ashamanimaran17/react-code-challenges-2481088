import { useEffect, useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)
  function dblClicked(){
    alert("mouse clicked");
  }
  useEffect(()=> {
if(windowEvent){
  window.addEventListener("dblclick", dblClicked);
}else{
  window.removeEventListener("dblclick", dblClicked);
}
  },[windowEvent])
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
