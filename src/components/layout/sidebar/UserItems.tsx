import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../providers/useAuth';
import type { IUser } from '../../../types';

const UserItems = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const { db } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
          const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as IUser[]; 
  
          setUsers(users);
        }
      );
  
      return () => unsubscribe();
    }, []);

  return ( 
      <Card variant="outlined" sx={{p: 2, py: 2, border: "none", backgroundColor: "white", borderRadius: 2}}>
        {users.map(user => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Link
              to={`/profile/${user.id}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ position: "relative", width: "fit-content" }}>
                <Avatar
                  alt={user.name}
                  sx={{ width: 46, height: 46 }}
                  src={user.avatar}
                />

                {user.online && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 10,
                      height: 10,
                      bgcolor: "#4FB14F",
                      borderRadius: "50%",
                      border: "1.6px solid white",
                    }}
                  />
                )}
              </Box>

              <Typography
                variant="body1"
                sx={{
                  marginLeft: 2,
                  color: "black",
                }}
              >
                {user.name}
              </Typography>
            </Link>

            <IconButton
              onClick={() => navigate(`/messages/${user.id}`)}
            >
              <QuestionAnswerIcon />
            </IconButton>
          </Box>
        ))}
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/messages')} sx={{px: 0, pb: 0}}>
              <ListItemIcon>
                <QuestionAnswerIcon sx={{fill: "#447BBA"}} />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
  );
}
 
export default UserItems;