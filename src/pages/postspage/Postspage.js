import { Post } from "../../components/post/Post";
import { NavBar } from "../../components/navBar/NavBar";
import { Recommended } from "../../components/recommended/Recommended";
import { Categories } from "../../components/categories/Categories";
import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { setTerm, selectTerm } from "./postsPageSlice";
import { useSelector, useDispatch } from "react-redux";


export const PostsPage = () => {
  const [data, setData] = useState([])
  const term = useSelector(selectTerm)
  console.log(term)



  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.reddit.com/${term}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [term])

  return (
    <div>
      <NavBar />
      <div className='mt-5 row m-0'>
        <div className='col-9'>
          <Categories />
          {data.data && data.data.children.map((post, index) => 
            <Post 
              key={index}
              title={post.data.title}
              author={post.data.author}
              large={post.data.large}
              subreddit={post.data.subreddit}
              score={post.data.score}
              created_at_utc={post.data.created_utc}
              numComments={post.data.num_comments}
              isVideo={post.data.isVideo}
              selftext={post.data.selftext_html}
              commentsinfo={post.data.commentsinfo}
              permalink={post.data.permalink}
              url={post.data.url}
              fullpost={false}
            />
          )}
        </div>
        <div className='mt-5 col-3'>
          <Recommended />
        </div>
      </div>
    </div>
  )
}

