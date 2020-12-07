import { useQuery } from "react-query";
import { comment } from "../services";

const useComments = (params) => {
  return useQuery(["comments", params], comment.getCommentsById);
};

export default useComments;
