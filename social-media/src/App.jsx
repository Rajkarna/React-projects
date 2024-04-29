import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import PostListContextProvider from "./store/Post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="app-container">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="content">
          <Header />
          <Outlet />

          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
};

export default App;
