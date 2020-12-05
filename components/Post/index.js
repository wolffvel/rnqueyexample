import PropTypes from "prop-types";
import Post from "./Post";

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
