import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import { ImSpinner6 } from "react-icons/im";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <Fetchitems />
      {fetchStatus.currentlyFetching ? <ImSpinner6 /> : <Outlet />}

      <Footer />
    </>
  );
};

export default App;
