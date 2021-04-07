import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../redux/actions/user.actions";
import { dateParser } from "../Utils";
import FollowHandler from "./FollowHandler";

const ProfileUpdate = () => {
  const [bio, setBio] = useState();
  const [updateBioArea, setUpdateBioArea] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    dispatch(updateBio(userData._id, bio));
    setUpdateBioArea(false);
  };
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="user-logo" />
          <UploadImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateBioArea === false && (
              <>
                <p onClick={() => setUpdateBioArea(!updateBioArea)}>
                  {userData.bio}
                </p>
                <button onClick={() => setUpdateBioArea(!updateBioArea)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateBioArea && (
              <>
                <textarea
                  name=""
                  id=""
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>
                  Valider les modifications
                </button>
              </>
            )}
          </div>
          <h4>Membre depuis le : {dateParser(userData.createdAt)} </h4>
          <h5 onClick={() => setFollowingPopup(true)}>
            Abonnement : {userData.following ? userData.following.length : null}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : null}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user_pic" />
                        <h4>{user.pseudo}</h4>
                        <FollowHandler idToFollow={user._id} />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user_pic" />
                        <h4>{user.pseudo}</h4>
                        <FollowHandler idToFollow={user._id} />
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
