// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Home as HomeIcon, Group as GroupIcon } from '@mui/icons-material';
import NestedList from './componentsidebar.js'




const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    // selectedIndex=index
    setSelectedIndex(index);
    // console.log(typeof(selectedIndex),typeof(index));
  };
  return (
    <Drawer style={{top:'30px'}}
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/home" 
          selected={selectedIndex === 0}
          className='Mui-focuVisible'
          onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Bosh Sahifa" />
        </ListItem>
        <ListItem button component={Link} to="/group"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Guruhlar" />
        </ListItem>
      </List>
      <NestedList />
    </Drawer>
  );
};

export default Sidebar;
