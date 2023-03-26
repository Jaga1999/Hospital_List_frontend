import React, { useEffect, useState } from 'react'
import { Home } from './Components/Home/Home'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    return axios("http://localhost:5000/hospitals")
          .then((res)=>{setData(res.data)})
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