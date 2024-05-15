import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markFetchDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../store/fetchSlice";
import { addInitialItems } from "../store/itemsSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    dispatch(markFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItems(items));
      });
  }, [fetchStatus]);
  return <></>;
};

export default Fetchitems;
