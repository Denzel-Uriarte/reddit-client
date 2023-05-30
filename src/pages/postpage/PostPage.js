import { Post } from "../../components/post/Post";
import { NavBar } from "../../components/navBar/NavBar";
import { Recommended } from "../../components/recommended/Recommended";
import { Categories } from "../../components/categories/Categories";
import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const PostPage = (permalink) => {
  const [data, setData] = useState([])
  const link = Object.values(permalink.permalink)[0];


  useEffect((() => {
    async function fetchData() {
      try {
      const response = await fetch(`https://www.reddit.com/${link}.json`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
    }

    fetchData()
  }), [link])
  
  return (
    <div>
      <NavBar />
      <div className='mt-5 row m-0'>
        <div className='col-md-9 col-12 mt-5 mt-md-0'>
          <Categories />
          {data && data.length > 0 && data[0].data.children.map((post, index) => (
          <Post 
            key={index}
            title={post.data.title}
            author={post.data.author}
            large={post.data.large}
            subreddit={post.data.subreddit}
            score={post.data.ups}
            created_at_utc={post.data.created}
            numComments={post.data.num_comments}
            isVideo={post.data.is_video}
            selftext={post.data.selftext}
            commentsinfo={data[1].data.children}
            url={post.data.url}
            media={post.data?.fallback_url || null}
            permalink={permalink}
            fullpost={true}
          />
        ))}
        </div>
        <div className='mt-5 col-3 d-none d-md-block'>
          <Recommended />
        </div>
      </div>
    </div>
  )
}

