import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabPanel from "../Widgets/TabPanel";
import { StyledTab } from "./Developer.css";
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { Projects } from "./Projects/Projects";
import { SECTIONS } from "./sections";
import { Skills } from "./Skills/Skills";

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

  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
          >
            {SECTIONS.map((section, index) => (
              <StyledTab label={section} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {SECTIONS.map((section, index) => (
          <TabPanel value={tab} index={index}>
            {renderSection(section)}
          </TabPanel>
        ))}
      </Box>
    </>
  );
};
