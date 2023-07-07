"use client";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


interface ScrollableTabsProps { 
  titles: string[];
  children?: React.ReactNode[];
}

export default function ScrollableTabsButtonAuto({
  titles, 
  children
}: ScrollableTabsProps) {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(min-width: 515px)');
  
  children?.map((child) => {
    console.log(child);
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{
        width: '100%',
        bgcolor: 'background.paper',
        marginTop: "-0.45rem"
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation={matches ? "horizontal" : "vertical"}
          centered

        >
          {titles.map((title, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </Box>
      <Container maxWidth="md">
        {children?.map((child, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            {child}
          </CustomTabPanel>
        ))}
      </Container>
    </>
  );
}