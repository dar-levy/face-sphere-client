import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/profiles";

function profileUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getProfiles() {
  return http.get(apiEndpoint);
}

export function getProfile(profileId) {
  return http.get(profileUrl(profileId));
}

export function saveProfile(profile) {
  if (profile.id) {
    const body = { ...profile };
    delete body.id;
    return http.put(profileUrl(profile.id), body);
  }

  return http.post(apiEndpoint, profile);
}

export function deleteProfile(profileId) {
  return http.delete(profileUrl(profileId));
}
