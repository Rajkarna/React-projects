import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";
import Welcomemessage from "./Welcomemessage";
import Loadspinner from "./Loadspinner";

const Postlist = () => {
  const { postList, fetching } = useContext(PostListContext);
  

  return (
    <div>
      {fetching && <Loadspinner />}
      {postList &&
        postList.length &&
        postList.map((post) => <Post key={post.id} post={post} />)}
      {!fetching && <Welcomemessage />}
    </div>
  );
};

export default Postlist;
