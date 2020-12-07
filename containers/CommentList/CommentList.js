import React from "react";
import { ScrollView, Text } from "react-native";
import Comment from "../../components/Comment";
import useComments from "../../hooks/useComments";

const CommentList = () => {
  const { data, isLoading } = useComments({ postId: "1" });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {data.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </ScrollView>
  );
};

export default CommentList;
