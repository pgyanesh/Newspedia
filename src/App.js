import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{

  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
 
 
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
        <Routes>
     
       <Route exact path='/' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"general"} country={'in'} category={'general'}/>} />
       <Route exact path='/business' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"business"} country={'in'} category={'business'}/>} />
       <Route exact path='/entertainment' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"entertainment"} country={'in'} category={'entertainment'}/>} />
       <Route exact path='/health' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"health"} country={'in'} category={'health'}/>} />
       <Route exact path='/science' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"science"} country={'in'} category={'science'}/>} />
       <Route exact path='/sports' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"sports"} country={'in'} category={'sports'}/>} />
       <Route exact path='/technology' element={<News setProgress = {setProgress} apiKey ={apiKey} key={"technology"} country={'in'} category={'technology'}/>} />
       </Routes>
       </BrowserRouter>
      </div>
    )
  
}
 export default App