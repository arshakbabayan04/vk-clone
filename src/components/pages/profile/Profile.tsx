import { Avatar } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { useProfilePosts } from "../../hooks/useProfilePosts";
import { Link } from "react-router-dom";
import { Box, ImageList, ImageListItem, Typography, Paper, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import Card from "../../ui/Card";
import CollectionsIcon from '@mui/icons-material/Collections';
import './profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { posts, loading, error } = useProfilePosts();
  
  return (
    <>
      <Card stls={{marginTop: 0, display: "flex", gap: 2,alignItems: "center", paddingTop: 4, paddingBottom: 4}}>
        <div className="profile-avatar">
          <Avatar
            alt={user?.name}
            sx={{width: 180, height: 180}}
            src={user?.avatar} 
          />
          <Paper className="profile-avatar_menu" variant="outlined" 
            sx={{
              backgroundColor: "white", 
              borderRadius: 2, 
              border: "none",  
              width: '100%', 
              maxWidth: '100%', 
              position: 'absolute', 
              bottom: '-52px', 
              left: 0, 
              right: 0, 
              zIndex: 1, 
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <CollectionsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add image</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
        <h2>{user?.name}</h2>
      </Card>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts && 
        posts.map((post, indx) => (
          <Card key={`Post-${indx}`} stls={{marginTop: 2}}>
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
          </Card>
        ))
      }
    </>
  );
}
 
export default Profile;