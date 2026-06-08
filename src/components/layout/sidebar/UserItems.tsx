import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { users } from './dataUsers';

const UserItems = () => {
  const navigate = useNavigate();

  return ( 
      <Card variant="outlined" sx={{p: 2, py: 2, border: "none", backgroundColor: "#f1f7fa", borderRadius: 2}}>
        {users.map(user => (
          <Link to={`/profile/${user.id}`} key={user.id} style={{marginBottom: 12, display: "block", textDecoration: "none"}}> 
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Box sx={{position: "relative", width: "fit-content"}}>
                <Avatar 
                  alt={user.name}
                  sx={{width: 46, height: 46}}
                  src={user.avatar} 
                />
                {
                  user.online && 
                  <Box 
                    sx={{
                      position: "absolute", 
                      bottom: 0, 
                      right: 0, 
                      width: 10, 
                      height: 10, 
                      bgcolor: '#4FB14F', 
                      borderRadius: '50%', 
                      border: '1.6px solid white'
                    }} />
                }
              </Box>
              <Typography variant="body1" sx={{marginLeft: 2, textDecoration: "none", color: "black"}}>{user.name}</Typography>
            </Box>
          </Link>
        ))}
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/messages')} sx={{px: 0, pb: 0}}>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
  );
}
 
export default UserItems;