import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";

const Postlist = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div>
      {postList.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Postlist;
