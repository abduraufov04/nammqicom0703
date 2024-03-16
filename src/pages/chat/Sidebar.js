import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  searchInput: {
    margin: '16px', // Use fixed value or theme.spacing(value) instead of theme.spacing
  },
}));

const ChatSidebar = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <TextField
        className={classes.searchInput}
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {/* Example list items */}
        <ListItem button>
          <ListItemText primary="John Doe" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Jane Smith" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Alice Johnson" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default ChatSidebar;
