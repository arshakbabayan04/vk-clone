import Menu from './Menu';
import UserItems from './UserItems';
import Stack from '@mui/material/Stack';

const Sidebar = () => {
  return ( 
    <Stack direction="column" spacing={2} className="sidebar">
      <UserItems />
      <Menu />
    </Stack>
  );
}
 
export default Sidebar;