import React, { useContext } from "react";
import Log from "../components/log";
import { UidContext } from "../components/AppContext";
import ProfileUpdate from "../components/Profile/ProfileUpdate";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <div>
          <ProfileUpdate />
        </div>
      ) : (
        <div className="log-container">
          <Log signIn={false} signUp={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
