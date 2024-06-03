import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getProfile, saveProfile } from "../services/fakeProfileService";

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

  componentDidMount() {
    const profileId = this.props.match.params.id;
    if (profileId === "new") return;

    const profile = getProfile(profileId);
    if (!profile) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(profile) });
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

  doSubmit = () => {
    saveProfile(this.state.data);

    this.props.history.push("/profiles");
  };

  render() {
    return (
      <div>
        <h1>Profile Form</h1>
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

export default ProfileForm;
