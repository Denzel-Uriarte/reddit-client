import React from 'react';
import logo from '../logo.svg';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch
 } from 'react-router-dom';
// import { SearchBar } from '../components/searchBar/SearchBar';
// import { Counter } from '../features/zounter/Counter';
import './App.css';
import ROUTES from './routes';

export default function App() {
  return (
      <div className="app">
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
      </Routes>
    </Router>
      </div>
    
  )
}

// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <Counter /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }