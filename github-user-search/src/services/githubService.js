import axios from 'axios';

/* TASK 1 – keep this */
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

/* TASK 2 – advanced search */
export const searchUsersAdvanced = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
  );

  return response.data;
};
