import {useState, useEffect, useCallback} from "react";
export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [currentDog, setCurrentDog] = useState();
  const url = "https://dog.ceo/api/breeds/image/random";
  const fetchNewDog = useCallback(() => {
  fetch(url).then((resp)=> {
    return (resp.json())
  }).then((json) => {
    setCurrentDog(json.message);
  })
  }, [url, setCurrentDog])
  useEffect(() => {
    fetchNewDog();
  }, [fetchNewDog])
  return (
    <div className='dog-pics'>
      <img src={currentDog} alt="dog" height={"300px"}/>
      <button onClick={fetchNewDog}>🐶</button>
    </div>
  )
}
