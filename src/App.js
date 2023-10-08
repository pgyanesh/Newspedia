import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
       <Navbar/>
       <Route path='/'> <News pageSize={3} country={'in'} category={'general'}/></Route>
       <Route path='/business'> <News pageSize={3} country={'in'} category={'business'}/></Route>
       <Route path='/entertainment'> <News pageSize={3} country={'in'} category={'entertainment'}/></Route>
       <Route path='/health'> <News pageSize={3} country={'in'} category={'health'}/></Route>
       <Route path='/science'> <News pageSize={3} country={'in'} category={'science'}/></Route>
       <Route path='/sports'> <News pageSize={3} country={'in'} category={'sports'}/></Route>
       <Route path='/technology'> <News pageSize={3} country={'in'} category={'technology'}/></Route>
       
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}
