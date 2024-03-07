import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RecipeReviewCard from './maqola';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Top" value="1" />
            <Tab label="For you" value="2" />
            <Tab label="Recent blogs" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <RecipeReviewCard />
            <RecipeReviewCard />
            
        </TabPanel>
        <TabPanel value="2">
        <RecipeReviewCard />

        </TabPanel>
        <TabPanel value="3">
            <RecipeReviewCard />
        </TabPanel>
      </TabContext>
    </Box>
  );
}