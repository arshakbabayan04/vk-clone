import Menu from './Menu';
import UserItems from './UserItems';
import Stack from '@mui/material/Stack';
import UserLogout from './UserLogout';

const Sidebar = () => {
  return ( 
    <Stack direction="column" spacing={2} className="sidebar">
      <UserLogout />
      <UserItems />
      <Menu />
    </Stack>
  );
}
 
export default Sidebar;