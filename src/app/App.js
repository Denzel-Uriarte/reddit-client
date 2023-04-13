import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch
 } from 'react-router-dom';
import './App.css';
import ROUTES from './routes';

export default function App() {
  return (
        <Router>
      <nav>
        <NavLink to={ROUTES.homeRoute()} activeClassName="active">
          WenzelVerse Forums
        </NavLink>
        {/* <SearchBar /> */}
      </nav>

      <Routes>
        <Route path="/home">
            {/* <HomePage /> */}
        </Route>
        <Route path='/best'>
          
        </Route>
        <Route path='/hot'>

        </Route>
        <Route path='/new'>

        </Route>
        <Route path='/top'>

        </Route>
        <Route path='/rising'>

        </Route>
        <Route path='/:subreddit'>

        </Route>
        <Route path='/:subreddit/post/:id'>

        </Route>
      </Routes>
    </Router>
    
  )
}
