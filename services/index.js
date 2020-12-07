import servicesManager from "../utils/servicesManager";
import Post from "./Post.services";
import Comment from "./Comment.services";

const mobileAxios = servicesManager.api();

export const post = new Post(mobileAxios);
export const comment = new Comment(mobileAxios);
