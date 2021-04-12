import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/post.action";

const DeleteCard = ({ id }) => {
  const dispatch = useDispatch();
  const deleteQuote = (e) => {
    dispatch(deletePost(id));
  };

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous vraiment supprimé ce post")) {
          {
            deleteQuote();
          }
        }
      }}
    >
      <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
