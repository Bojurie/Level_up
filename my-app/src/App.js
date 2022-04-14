import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/components/Nav'
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import {DataProvider} from './components/Context'

import '../src/components/Nav.css'

function App() {
  return ( 
    <Router >
      <DataProvider>
      <div className="App">  
        <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/blog' component={Blog} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

          </Switch>
          
        
      </div> 
      </DataProvider>
    </Router>
  );
}

export default App;
