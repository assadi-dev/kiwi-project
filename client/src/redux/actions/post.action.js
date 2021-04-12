import axios from "axios";

//Posts
export const GET_POST = "GET_POST";
export const GET_ALL_POST = "GET_ALL_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_POST_ERRORS = "GET_POST_ERRORS";

//Likes-Unlikes
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

//commentaires
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

//Trends
export const GET_TRENDS = "GET_TRENDS";

export const getPost = (count) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/post`)
      .then((res) => {
        const array = res.data.slice(0, count);
        dispatch({ type: GET_POST, payload: array });
        dispatch({ type: GET_ALL_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const likePost = (postId, userId) => {
  return (dispatch) => {
    return axios
      .patch(`${process.env.REACT_APP_API_URL}/api/post/like-post/${postId}`, {
        id: userId,
      })
      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unLikePost = (postId, userId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/post/unlike-post/${postId}`,
        {
          id: userId,
        }
      )
      .then((res) => {
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

//Ajouter un Post
export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/api/post`, data)

      .catch((err) => console.log(err));
  };
};

//Modifier un Post
export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios
      .put(`${process.env.REACT_APP_API_URL}/api/post/${postId}`, { message })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { postId, message } });
      })
      .catch((err) => console.log(err));
  };
};

//supprimer un post
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios
      .delete(`${process.env.REACT_APP_API_URL}/api/post/${postId}`)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

//Ajout commentaire
export const addComment = (postId, commenterId, commenterPseudo, text) => {
  return (dispatch) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/post/comments-post/${postId}`,
        {
          commenterId,
          commenterPseudo,
          text,
        }
      )
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

//Editer un commentaire
export const editComment = (postId, commentId, text) => {
  return (dispatch) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/post/edit-comments-post/${postId}`,
        {
          commentId,
          text,
        }
      )
      .then((res) => {
        dispatch({
          type: EDIT_COMMENT,
          payload: { postId, commentId, text },
        });
      })
      .catch((err) => console.log(err));
  };
};

//Supprimer un commentaire
export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/post/delete-comments-post/${postId}`,
        {
          commentId,
        }
      )
      .then((res) => {
        dispatch({
          type: DELETE_COMMENT,
          payload: { postId, commentId },
        });
      })
      .catch((err) => console.log(err));
  };
};

//Trends

export const getTrends = (sortedArray) => {
  return (dispatch) => {
    dispatch({ type: GET_TRENDS, payload: sortedArray });
  };
};
