export default function (axiosInstance) {
  return {
    getPosts: async () => {
      const { data } = await axiosInstance.get("posts");
      return data;
    },
  };
}
