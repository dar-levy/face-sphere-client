import React from "react";

const ProfileForm = ({ match, history }) => {
  return (
    <div>
      <h1>Profile Form {match.params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default ProfileForm;
