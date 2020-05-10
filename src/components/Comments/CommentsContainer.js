import React, { useEffect, useState } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Firebase from "../../api/firebase";
import * as moment from "moment";

const CommentsContainer = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const db = Firebase.database();
  const auth = useSelector((state) => state.auth);
  const commentsRef = Firebase.database().ref(`/comments/${props.tourId}`);
  const addComment = () => {
    db.ref(`comments/${props.tourId}`).push({
      comment: comment,
      name: auth.username,
      timestamp: Date.now(),
    });
    setComment("");
  };

  useEffect(() => {
    commentsRef.on("value", (res) => {
      setComments(res.val());
    });
  }, []);

  return (
    <Comment.Group size="large">
      <Header as="h3" dividing>
        Comments
      </Header>
      {comments &&
        Object.keys(comments).map((item) => {
          return (
            <Comment>
              <Comment.Content>
              <Comment.Avatar src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png' />
                <Comment.Author>{comments[item].name}</Comment.Author>
                <Comment.Metadata>
                  <div>{moment(comments[item].timestamp).fromNow()}</div>
                </Comment.Metadata>
                <Comment.Text>{comments[item].comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          );
        })}
      {auth.userAuthenticated ? (
        <Form>
          <Form.TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            color="teal"
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            onClick={() => addComment()}
          />
        </Form>
      ) : <h3>Log in to leave a comment</h3>}
    </Comment.Group>
  );
};

export default CommentsContainer;
