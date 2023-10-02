import React from "react";
import Blink from "react-blink-text";

import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user } = useAuth0();
  const { nickname, picture, email, email_verified } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{nickname}'s profile data</h2>
        </div>
      </div>
      <div className="lead">
        email: {email}
        <br></br>
        email verified: {{email_verified} ? "Yes" : <Blink color='red' text='No' fontSize='20'>
        </Blink>}
      </div>
    </div>
  );
};

export default Profile;
