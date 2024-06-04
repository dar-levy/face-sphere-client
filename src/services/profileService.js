import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/profiles";

function profileUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getProfiles() {
  return http.get(`${apiEndpoint}`);
}

export function getProfile(profileId) {
  return http.get(profileUrl(profileId));
}

export function saveProfile(profile) {
  if (profile._id) {
    const body = { ...profile };
    delete body._id;
    return http.put(profileUrl(profile._id), body);
  }

  return http.post(apiEndpoint, profile);
}

export function deleteProfile(profileId) {
  return http.delete(profileUrl(profileId));
}
