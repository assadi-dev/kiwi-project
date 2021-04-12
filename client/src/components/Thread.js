import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions/post.action";
import Cards from "./Post/Cards";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  const [count, setCount] = useState(5);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
      setCount(count + 5);
    }
  };

  useEffect(() => {
    if (loadPost) {
      dispatch(getPost(count));
      setLoadPost(false);
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, dispatch]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Cards post={post} key={post._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
