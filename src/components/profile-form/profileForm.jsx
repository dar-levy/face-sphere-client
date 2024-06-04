import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { getProfile, saveProfile } from "../../services/profileService";
import "./ProfileForm.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

class ProfileForm extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    email: Joi.string().required().email().label("Email"),
    avatar: Joi.string().required().uri().label("Avatar"),
  };

  async componentDidMount() {
    try {
      const profileId = this.props.params.id;
      if (profileId === "new") return;
      const { data: profile } = await getProfile(profileId);
      this.setState({ data: this.mapToViewModel(profile) });
    } catch (err) {
      return this.props.navigate("/not-found");
    }
  }

  mapToViewModel(profile) {
    return {
      _id: profile._id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
      avatar: profile.avatar,
    };
  }

  doSubmit = async () => {
    try {
      await saveProfile(this.state.data);
      this.props.navigate("/profiles");
      toast.success("Success");
    } catch (err) {
      toast.error("Could not save the profile");
    }
  };

  render() {
    const { avatar } = this.state.data;

    return (
      <div className="profile-form-container">
        <h1>Profile Form</h1>
        {avatar && (
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name", "Last Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("avatar", "Avatar")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default function ProfileFormWrapper(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <ProfileForm {...props} params={params} navigate={navigate} />;
}
