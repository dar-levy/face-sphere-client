import React, {Component} from 'react';
import {getProfiles, deleteProfile} from "../services/fakeProfileService";

class Profiles extends Component {
    state = {
        profiles: getProfiles()
    }

    handleDelete = (profile) => {
        const profiles = this.state.profiles.filter(p => p.id != profile.id)
        this.setState({profiles})
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {this.state.profiles.map(profile => (
                    <tr key={profile.id}>
                        <td>{profile.first_name}</td>
                        <td>{profile.last_name}</td>
                        <td>{profile.email}</td>
                        <td>
                            <button onClick={() => this.handleDelete(profile)} className="btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Profiles;