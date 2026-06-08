import { Box, TextField } from "@mui/material";
import type { IPost, TypeSetState } from "../../../types";
import { useState } from "react";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: React.FC<IAddPost> = ({ setPosts }) => {

  const [content, setContent] = useState("");

  const addPostHandler = () => {
    setPosts(prev => [...prev, {
      author: users[0],
      createdAt: new Date().toISOString(),
      content,
    }])
  }

  return ( 
    <Box sx={{
      border: "1px solid #ccc",
      borderRadius: '10px',
      padding: 2,
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