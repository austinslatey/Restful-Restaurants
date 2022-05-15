import { API_ENDPOINT } from ".";

const BASE_API_ROUTE = `${API_ENDPOINT}/restaurants/starred`;

export const getStarredRestaurants = async () => {
  try {
  const response = await fetch(`${BASE_API_ROUTE}`);
  const json = await response.json();

  return json;
  }
  catch(err) {
    throw err;
  }
};

export const unstarRestaurant = async (id) => {
  try {
  const response =  await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "DELETE"
  });

  return response.status;
}
catch (err) {
  throw err;
}
};

export const updateComment = async (id, newComment) => {
  try {
  const response = await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newComment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
}
catch (err) {
  throw err;
}
};