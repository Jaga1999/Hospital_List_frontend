import React, { useEffect, useState } from 'react'
import { Home } from './Components/Home/Home'

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    return fetch("http://localhost:5000/hospitals")
          .then((response) => response.json())
          .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      <Home value={data} />
    </div>
  )
}

export default App