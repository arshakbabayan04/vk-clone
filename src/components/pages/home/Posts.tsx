import { Avatar, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import type { IPost } from "../../../types";
import { Link } from "react-router-dom";

interface IPosts {
  posts: IPost[]
}

const Posts = ({posts}: IPosts) => {
  return ( 
    <>
      {posts.map((post, indx) => (
        <Box key={`Post-${indx}`} sx={{
          border: "none",
          borderRadius: '10px',
          backgroundColor: "white",
          padding: 2,
          marginTop: 2,
        }}>
          <Link to={`/profile/${post.author.id}`} key={post.author.id} style={{marginBottom: 12, display: "block", textDecoration: "none"}}> 
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Box sx={{position: "relative", width: "fit-content"}}>
                <Avatar 
                  alt={post.author.name}
                  sx={{width: 46, height: 46}}
                  src={post.author.avatar} 
                />  
              </Box>

              <Box>
                <Typography variant="body1" sx={{marginLeft: 2, textDecoration: "none", color: "black"}}>{post.author.name}</Typography>
                <Typography variant="body1" sx={{marginLeft: 2, textDecoration: "none", color: "black", opacity: '0.6'}}>{post.createdAt}</Typography>
              </Box>
            </Box>
          </Link>

          <Typography variant="body1" sx={{marginTop: 1}}>{post.content}</Typography>

          {post.images && 
            (
              <Box sx={{height: '60vh', overflowY: "auto"}}>
                <ImageList
                  variant="masonry" cols={3} gap={16} sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}
                >
                  {post.images.map((image, index) => (
                    index !== 0 ?
                    <ImageListItem key={image} sx={{borderRadius: 2, overflow: "hidden"}}>
                      <img
                        src={image}
                        alt={''}
                        loading="lazy"
                      />
                    </ImageListItem>
                    : <ImageListItem key={image} sx={{borderRadius: 2, overflow: "hidden", gridColumn: "1 / 3", gridRow: "1 / 3"}}>
                      <img
                        src={image}
                        alt={''}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            )
          }
        </Box>
      ))}
    </>
  );
}
 
export default Posts;