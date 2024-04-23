import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

function postListReducer(currentList, action) {
  let newPostList = currentList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentList];

    return newPostList;
  } else if (action.type === "DELETE_POST") {
    newPostList = currentList.filter((item) => item.id !== action.payload.id);
    return newPostList;
  }
  return currentList;
}

function PostListContextProvider({ children }) {
  const [postList, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const newPost = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    };

    dispatchPostlist(newPost);
  };

  const deletePost = (id) => {
    const deletePost = {
      type: "DELETE_POST",
      payload: { id: id },
    };

    dispatchPostlist(deletePost);
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}

export default PostListContextProvider;
