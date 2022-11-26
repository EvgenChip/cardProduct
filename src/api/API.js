import axios from "axios";

export const sendFormPost = async (payload) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    payload
  );

  return res;
};
