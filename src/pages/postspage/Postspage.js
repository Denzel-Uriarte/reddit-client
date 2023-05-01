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
      <blockquote class="reddit-embed-bq" style={{height:500+'px'}} data-embed-height="500">      <a href="https://www.reddit.com/r/mexico/comments/12zrxn2/hay_tiro_don_lama_hay_tiro/">Hay tiro don Lama, hay Tiro!</a><br/> by      <a href="https://www.reddit.com/user/bansote">u/bansote</a> in      <a href="https://www.reddit.com/r/mexico/">mexico</a>    </blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
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
              selftext={post.data.selftext}
              commentsinfo={post.data.commentsinfo}
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

