import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";

const Createpost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";

    sendPost()

    async function sendPost() {
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          reactions: reactions,
          userId: userId,
          tags: tags,
        }),
      });

      const result = await res.json();
      addPost(result);
    }
  };

  return (
    <div>
      <h1 className="text-center text-primary  mb-5">
        Add Post using the form
      </h1>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="w-50">
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              Enter your User Id here
            </label>
            <input
              type="text"
              ref={userIdElement}
              className="form-control"
              id="userId"
              placeholder="Your User Id"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              ref={postTitleElement}
              className="form-control"
              id="title"
              placeholder="How are you feeling today..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              type="text"
              ref={postBodyElement}
              rows="4"
              className="form-control"
              id="body"
              placeholder="Tell us more about it"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Number of reactions
            </label>
            <input
              type="text"
              ref={reactionsElement}
              className="form-control"
              id="reactions"
              placeholder="How many people reacted to this post"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Enter your hashtags here
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              ref={tagsElement}
              placeholder="Please enter tags using space"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createpost;
