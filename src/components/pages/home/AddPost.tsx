import { Box, TextField } from "@mui/material";
import type { IPost, TypeSetState } from "../../../types";
import { useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: React.FC<IAddPost> = () => {

  const [content, setContent] = useState("");
  const { user, db } = useAuth();

  const addPostHandler = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && user) {

      try {
        const docRef = await addDoc(collection(db, "posts"), {
          author: user,
          createdAt: new Date().toISOString(),
          content,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setContent("");
    }
  }

  return ( 
    <Box sx={{
      border: "none",
      borderRadius: '10px',
      padding: 2,
      backgroundColor: "white",
    }}>
      <TextField
        label="Что у вас нового?"
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            sx: {
              borderRadius: '25px',
              backgroundColor: '#F9F9F9',
            },
          },
        }}
        margin="normal"
        onKeyDown={addPostHandler}
        onChange={e => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
}
 
export default AddPost;