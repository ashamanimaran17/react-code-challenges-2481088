import React,{useContext, useState} from 'react'
const MyContext = React.createContext();
function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  const {setColor} = useContext(MyContext);
  const changeColor = (color) => {
    setColor(color);
  }
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={()=> changeColor(color)}/>)}
    </div>
  )
}

function Pixel () {
  const {color} = useContext(MyContext);
const [bk, setBk] = useState(color);
const changePixelColor = () => {
  setBk(color);
}
  return <div style={{ height: '20px', width: '20px', backgroundColor: bk, margin: '1px' }} onClick = {changePixelColor}/>
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [color, setColor]= useState("lightgrey")
  return (
    <MyContext.Provider value={{color, setColor}}>
    <div>
      <ColorPicker />
      <Pixels />
    </div>
    </MyContext.Provider>
  )
}
