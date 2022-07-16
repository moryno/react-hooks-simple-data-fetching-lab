import { useEffect, useState } from "react"

// create your App component here
const App = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const [imageObj, setImageObj] = useState({
    message: "",
    status: ""
   });
    useEffect(() => {
       fetch("https://dog.ceo/api/breeds/image/random")
         .then(res => res.json())
         .then(data => {
            setIsLoading(true);
            setImageObj(data)
         },
         (error) => {
            setIsLoading(true);
            setError(error)
         }
         )
    }, [])

 if(!isLoading) return <p>Loading...</p>
 
  return (
    <div>
      
      <img src={imageObj.message} alt="A Random Dog" />
     
    </div>
  )
}

export default App
