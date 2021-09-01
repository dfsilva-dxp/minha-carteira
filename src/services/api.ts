import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  params: {
    _sort: "create_at",
    _order: "desc",
  },
});
