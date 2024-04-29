import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const Createpost = () => {
  // const { addPost } = useContext(PostListContext);

  return (
    <div>
      <h1 className="text-center text-primary  mb-5">
        Add Post using the form
      </h1>
      <Form method="post" className="d-flex justify-content-center">
        <div className="w-50">
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              Enter your User Id here
            </label>
            <input
              type="text"
              name="userId"
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
              name="title"
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
              name="body"
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
              name="reactions"
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
              name="tags"
              placeholder="Please enter tags using space"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add post
          </button>
        </div>
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
 
  let formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return redirect("/");
}

export default Createpost;
