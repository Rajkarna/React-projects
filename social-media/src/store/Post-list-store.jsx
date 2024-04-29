import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currentList, action) {
  let newPostList = currentList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentList];

    return newPostList;
  } else if (action.type === "DELETE_POST") {
    newPostList = currentList.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "FETCH_POST") {
    newPostList = action.payload;
  }
  return newPostList;
}

function PostListContextProvider({ children }) {
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log(post);
    const newPost = {
      type: "ADD_POST",
      payload: post,
    };

    dispatchPostlist(newPost);
  };

  const deletePost = (id) => {
    const deletePost = {
      type: "DELETE_POST",
      payload: { id: id },
    };
    dispatchPostlist(deletePost);
    console.log("deleted");
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}

export default PostListContextProvider;
