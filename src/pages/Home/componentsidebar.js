import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import MenuIcon from '@mui/icons-material/Menu';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <b>Bo'limlar</b>
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <CalculateIcon />
        </ListItemIcon>
        <ListItemText primary="Matematika" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ScienceIcon />
        </ListItemIcon>
        <ListItemText primary="Kimyo" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary="Ko'proq" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Python" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <JavascriptIcon />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CssIcon />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <HtmlIcon />
            </ListItemIcon>
            <ListItemText primary="HTML" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}