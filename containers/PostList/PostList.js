import React from "react";
import { Text, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { post } from "../../services";
import Post from "../../components/Post";

const PostList = () => {
  const { data, isLoading } = useQuery("posts", post.getPosts);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      {data.map((currentPost) => (
        <Post
          key={currentPost.id}
          title={currentPost.title}
          body={currentPost.body}
        />
      ))}
    </ScrollView>
  );
};

export default PostList;
