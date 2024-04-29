import Post from "./Post";

import Welcomemessage from "./Welcomemessage";

import { useLoaderData } from "react-router-dom";

const Postlist = () => {
  const postList = useLoaderData();
  return (
    <div>
       {postList.length === 0 && <Welcomemessage />}
      {postList &&
        postList.length &&
        postList.map((post) => <Post key={post.id} post={post} />)}
     
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default Postlist;
