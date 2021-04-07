import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../redux/actions/user.actions";

const UploadImg = () => {
  const [file, setfile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleChange = (e) => {
    let value = e.target.files[0];
    setfile(value);
  };

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);
    dispatch(uploadPicture(data, userData._id));
  };
  return (
    <div>
      <form action="" className="upload-pic" onSubmit={handlePicture}>
        <label htmlFor="file">Changer l'image de profil</label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default UploadImg;
