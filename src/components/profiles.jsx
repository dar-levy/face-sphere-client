import React, {Component} from 'react';
import {getProfiles} from "../services/fakeProfileService";

class Profiles extends Component {
    state = {
        profiles: getProfiles()
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {this.state.profiles.map(profile => (
                    <tr>
                        <td>{profile.first_name}</td>
                        <td>{profile.last_name}</td>
                        <td>{profile.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Profiles;