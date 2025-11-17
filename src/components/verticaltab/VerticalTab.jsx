import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material'; // Add useMediaQuery and useTheme
import RepairDetails from './RepairDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({RepairDataFromProps}) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screens

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row', // Change direction based on screen size
      }}
    >
      <Tabs
        orientation={isSmallScreen ? 'horizontal' : 'vertical'} // Change orientation based on screen size
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: isSmallScreen ? 0 : 1, // Remove right border for small screens
          borderBottom: isSmallScreen ? 1 : 0, // Add bottom border for small screens
          borderColor: 'divider',
          padding: '10px',
          fontSize: '20px',
          minWidth: isSmallScreen ? '100%' : '200px', // Fixed width for tabs
        }}
      >
        {RepairDataFromProps.map((item, index) => (
          <Tab
            key={item.id}
            label={item.category} // Use the category as the label
            {...a11yProps(index)}
            sx={{
              backgroundColor: value === index ? '#ff6000' : 'inherit',
              color: value === index ? '#ffffff !important' : 'inherit',
              minWidth: isSmallScreen ? 'auto' : '100%', // Adjust width for small screens
            }}
          />
        ))}
      </Tabs>

      {RepairDataFromProps.map((item, index) => (
        <TabPanel
          key={item.id}
          value={value}
          index={index}
          sx={{
            width: isSmallScreen ? '100%' : 'calc(100% - 200px)', // Adjust width for small screens
          }}
        >
          <RepairDetails name={item.name} desc={item.description} />
        </TabPanel>
      ))}
    </Box>
  );
}