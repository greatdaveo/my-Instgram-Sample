import profileIcon from "../assets/instgram-avatar.png";
import getProfilePhoto from 'get-photo-url'
import { useState } from "react";

export default function Bio() {
  const [userDetails, setUserDetails] = useState({
    name: "David Olowomeye",
    about: "I am David, a Software Engineer and a Blockchain Enthusiast",
  });

  // This is to show the edit button
  const [openEditForm, setOpenEditForm] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon)

//   To edit the profile photo
const updateProfilePhoto = async () => {
    const newProfilePhoto = await getProfilePhoto('#profilePhotoInput')
    setProfilePhoto(newProfilePhoto)
}

  // This is to edit the user details
  const updateUserDetails = (e) => {
    e.preventDefault();
    setUserDetails({
      name: e.target.nameOfUser.value,
      about: e.target.aboutUser.value,
    });
    setOpenEditForm(false);
  };

  // This is to make the Cancel button disappear when clicked
  const cancelButton = (
    <button
      type="button"
      className="cancel-button"
      onClick={() => setOpenEditForm(false)}
    >
      Cancel
    </button>
  );

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" placeholder="Your name" />
      <input type="text" id="" name="aboutUser" placeholder="About you" />
      <br />
      {cancelButton}
      <button type="submit">Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setOpenEditForm(true)}>Edit</button>
  );

  return (
    // This is the section for the user details
    <section className="bio">

      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" onClick={updateProfilePhoto}/>
      <label htmlFor="profilePhotoInput">
        <div className="profile-photo" role="button" title="Click to edit photo">
            <img src={profilePhoto} alt="Profile" />
        </div>
      </label>
      
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>

        {openEditForm ? editForm : editButton}
      </div>
    </section>
  );
}
