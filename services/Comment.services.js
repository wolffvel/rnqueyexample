import { func } from "prop-types";

export default function (axiosInstance) {
  return {
    getCommentsById: async (queryId, params) => {
      const { data } = await axiosInstance.get("comments", {
        params: { ...params },
      });
      return data;
    },
  };
}
