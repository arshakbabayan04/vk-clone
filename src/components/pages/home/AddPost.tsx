import { Box, TextField, Alert } from "@mui/material";
import type { IPost, TypeSetState } from "../../../types";
import { useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: React.FC<IAddPost> = () => {

  const [content, setContent] = useState("");
  const [error, setError] = useState('');
  const { user, db } = useAuth();

  const addPostHandler = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && user) {
      const createdAt = new Date().toISOString();
      try {
        await addDoc(collection(db, "posts"), {
          author: user,
          content,
          createdAt: createdAt,
        });
      } catch (error) {
        if (error instanceof Error && error.message) {
          setError(error.message);
        }
      }
      setContent("");
    }
  }

  return ( 
    <>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
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
    </>
  );
}
 
export default AddPost;