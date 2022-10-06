import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../main";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import Loader from "../Loader/Loader";
import {
  collection,
  setDoc,
  serverTimestamp,
  doc,
  query,
  orderBy,
  limit,
  startAt,
} from "firebase/firestore";

const Chat = () => {
  const { auth, db } = useContext(Context);

  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const messagesRef = doc(collection(db, "messages"));
  const messagesCollection = collection(db, "messages");
  const q = query(messagesCollection, orderBy("createdAt"));

  const [messages, loading, error] = useCollectionData(q);

  const messageHandler = (e) => {
    setValue(e.target.value);
  };

  const sendMessage = async () => {
    await setDoc(messagesRef, {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });

    setValue("");
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 64 }}
        justifyContent="center"
        alignItems="center"
      >
        <div
          style={{
            width: "90vw",
            height: "70vh",
            border: "1px solid red",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                color: "#000",
                margin: user.uid === message.uid ? "auto" : "10px",
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px solid red",
                width: "fit-content",
              }}
              key={message.uid}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "100vw" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            maxRows={2}
            variant="outlined"
            sx={{ color: "#80cbc4" }}
            value={value}
            onChange={(e) => messageHandler(e)}
          />
          <Button onClick={() => sendMessage()} variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
