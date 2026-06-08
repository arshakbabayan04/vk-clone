import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { menu } from './dataMenu';
import { useNavigate  } from 'react-router-dom';


const Menu = () => {
  const navigate = useNavigate()

  return ( 
    <Card variant="outlined" sx={{backgroundColor: "#f1f7fa", borderRadius: 2, py: 1, border: "none", mb: 10}}>
      <List disablePadding>
        {menu.map((item) => (
          <ListItem disablePadding key={item.link}>
            <ListItemButton onClick={() => navigate(item.link)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          ))}
      </List>
    </Card>
  );
}
 
export default Menu;