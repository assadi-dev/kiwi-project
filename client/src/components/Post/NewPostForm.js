import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPost, getPost } from "../../redux/actions/post.action";
import { isEmpty, dateParser } from "../Utils";

function NewPostForm() {
  const [isLoading, setIsloading] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState("");
  const userData = useSelector((state) => state.userReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const dispatch = useDispatch();

  //Preview Image
  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo("");
  };

  //soumisson des donnée dans la bdd
  const handlePost = async () => {
    if (message || postPicture || video) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("message", message);
      data.append("video", video);
      if (file) data.append("file", file);

      await dispatch(addPost(data));
      dispatch(getPost());
      cancelPost();
    } else {
      alert("Veuillez entrez un message");
    }
  };
  const cancelPost = () => {
    setMessage("");
    setVideo("");
    setPostPicture("");
    setFile("");
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsloading(false);
    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.youtube") ||
          findLink[i].includes("https://youtube")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setPostPicture("");
        }
      }
    };

    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div className="data">
            <p>
              <span>
                {userData.following ? userData.following.length : null}{" "}
              </span>

              <span>
                Abonnement
                {userData.following && userData.following.length > 1
                  ? "s"
                  : null}{" "}
              </span>
            </p>
            <p>
              <span>
                {userData.followers ? userData.followers.length : null}{" "}
              </span>
              <span>
                Abonné
                {userData.followers && userData.followers.length > 1
                  ? "s"
                  : null}{" "}
              </span>
            </p>
          </div>
          <NavLink exact to="/profil">
            <div className="user-info">
              <img src={userData.picture} alt="user-pict" />
            </div>
          </NavLink>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {message || postPicture || video.lentgh > 20 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.picture} alt="postUser-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{dateParser(new Date())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    {postPicture && <img src={postPicture} alt="post-pic" />}
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="uplod-icon" />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>
                    Supprimer la video
                  </button>
                )}
              </div>
              {!isEmpty(errors.format && <p>{errors.format}</p>)}
              {!isEmpty(errors.maxSize && <p>{errors.maxSize}</p>)}
              <div className="btn-send">
                {message || postPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NewPostForm;
