import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabPanel from "../Widgets/TabPanel";
import { StyledTab } from "./Developer.css";

export const DeveloperPage = () => {
  const [tab, setTab] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      I'm a developer
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
          >
            <StyledTab label="Item One" {...a11yProps(0)} />
            <StyledTab label="Item Two" {...a11yProps(1)} />
            <StyledTab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};
