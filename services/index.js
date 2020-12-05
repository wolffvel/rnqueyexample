import servicesManager from "../utils/servicesManager";
import Post from "./Post.services";

const mobileAxios = servicesManager.api();

export const post = new Post(mobileAxios);
