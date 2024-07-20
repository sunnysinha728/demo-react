
// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
    const [data,setData] = useState([])
    const fetchData = async()=>{
const res = axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>setData(res.data))
return res

    }
    useEffect(()=>{
fetchData()
    }, [])
    console.log('jjjd',data)
    const addData = ()=>{

    }
  return (
    <div className='heading' >

     {/* {
        data.map((res)=>(
            <li>{res.id}</li>
        ))
     } */}
     <button onClick={addData}>addcolor</button>
    </div>
  );
};

export default App;