import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'; // Import makeStyles from @mui/styles
import Search from './search';

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
    margin: '16px', // Adjust the margin as needed
  },
  avatar: {
    marginRight: '8px', // Adjust the margin as needed
  },
  chatContainer: {
    marginLeft: drawerWidth,
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Drawer 
        sx={{marginTop:'20px'}}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
    
      >
        <Search />
        <List>
          {/* Example list items with avatars */}
          <ListItem button>
            <Avatar className={classes.avatar}>JD</Avatar>
            <ListItemText primary="John Doe" secondary="Assalomu aleykum" />
          </ListItem>
          <ListItem button>
            <Avatar className={classes.avatar}>JS</Avatar>
            <ListItemText primary="Jane Smith" secondary="Assalomu aleykum" />
          </ListItem>
          <ListItem button>
            <Avatar className={classes.avatar}>AJ</Avatar>
            <ListItemText primary="Alice Johnson" secondary='Assalomu aleykum'onFocus={1}/>
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.chatContainer}>
        {/* Chat content goes here */}
        <h1>Chat Content</h1>
      </div>
    </div>
  );
};

export default Chat;
