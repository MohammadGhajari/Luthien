import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  useEffect(async () => {
    try {
      const data = {
        stars: 3
      }
      const response = await axios.delete('http://127.0.0.10:8000/api/hotels/6612cf0fec9a2f126834703b');
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []); 
  
  
  return (
    <h1>This is a react app</h1>
  )
}

export default App
