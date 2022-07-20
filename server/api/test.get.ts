import axios from "axios";
export default defineEventHandler(async () => {
  let result;
  let test = await axios.get(`url`).then((res) => (result = res.data));

  return { result };
});
