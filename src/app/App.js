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
import { Comment } from '../components/comment/Comment';
import { NavBar } from '../components/navBar/NavBar';
import { Post } from '../components/post/Post';
import { PostsPage } from '../pages/postspage/Postspage';
import { PostPage } from '../pages/postpage/PostPage';
import { useParams } from 'react-router-dom';

export default function App() {
  return (
        <Router>
      <nav>
        <NavLink to={ROUTES.homeRoute()} activeClassName="active">
          WenzelVerse Forums
        </NavLink> 
        {/* <NavBar /> */}
      </nav>
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/:category" element={<PostsPage/>}/>
        <Route path="/r/:subreddit" element={<PostsPage/>}/>
        <Route path="/search/:searchterm" element={<PostsPage/>}/>
        <Route path="/post/*" element={<PostPageWithPermalink/>} />

      </Routes>
    </Router>
    
  )
}



function PostPageWithPermalink() {
  const permalink = useParams();

  return <PostPage permalink = {permalink} />;
}