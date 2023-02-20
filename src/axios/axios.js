import axios  from  "axios";

export default axios.create({
  baseURL: "https://blogapi-production-87cd.up.railway.app/api/v1/",
});