export default function Color ({ hex, name , changeColor}) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() =>changeColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
