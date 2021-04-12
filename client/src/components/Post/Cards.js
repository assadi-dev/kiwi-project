import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../Profile/FollowHandler";
import LikeButton from "./LikeButton";
import { getPost, updatePost } from "../../redux/actions/post.action";
import DeleteCard from "./Delete.card";
import CardComments from "./CardComments";

const Cards = ({ post }) => {
  const [isLoading, setIsloading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState("");
  const [showComment, setShowComment] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsloading(false);
  }, [usersData]);

  const updateItem = (e) => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="user_poster_pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) return user.pseudo;
                      else return null;
                    })}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modifications
                  </button>
                </div>
              </div>
            )}

            {post.picture && (
              <img src={post.picture} alt="post-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                width="500"
                height="300"
                src={post.video}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
                title={post.video}
              ></iframe>
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div
                  onClick={() => {
                    setIsUpdated(!isUpdated);
                  }}
                >
                  {" "}
                  <img src="./img/icons/edit.svg" alt="edit" />{" "}
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  src="./img/icons/message1.svg"
                  alt="comment"
                  onClick={() => setShowComment(!showComment)}
                />
                <i class="fal fa-comment-alt-lines"></i>
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <img src="./img/icons/share.svg" alt="share" />
            </div>
            {showComment && <CardComments post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Cards;
