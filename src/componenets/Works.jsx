/** @format */
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./minicomponent/post.jsx";

const posts = async () => {
  try {
    const url = "http://127.0.0.1:3000/api/posts/getAllPosts";
    const token = Document.cookie;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${
          token
            ? token
            : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmU4YWU2MzgyZjEwZGYxZmE5ZWM5MSIsImlhdCI6MTcwNzAyMzU2MCwiZXhwIjoxNzA3NjI4MzYwfQ.i7knZqP7JDgCWWueMzir7NJP4QA1Zm91FxnowaYMvto"
        }`,
      },
    });
    const posts = res.data;
    return posts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

function Works() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await posts(); // Assuming posts is an asynchronous function
        setPost(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  console.log(post);
  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        All Posts
      </h1>
      <div className='grid gap-5 grid-cols-3 px-10 py-16 '>
        {post ? post.map((el, idx) => <Post key={idx} post={el} />) : ""}
      </div>
    </div>
  );
}

export default Works;
