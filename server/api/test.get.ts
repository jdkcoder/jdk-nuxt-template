import axios from "axios";
export default defineEventHandler(async () => {
  const body = "x5ihf9FgkOig5CNdNEbVWdEJV";
  let result;
  let test = await axios
    .get(`https://v2.zeelios.vip/api/keys/show/${body}`)
    .then((res) => (result = res.data));

  return { result };
});
