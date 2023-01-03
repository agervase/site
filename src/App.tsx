import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { AppContainer, Content } from "./App.css";
import { DeveloperPage } from "./Components/Developer/Developer";
import { WriterPage } from "./Components/Writer/Writer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NavBar } from "./Components/Widgets/NavBar/NavBar";
import { Education } from "./Components/Developer/Education/Education";
import { Experience } from "./Components/Developer/Experience/Experience";
import { Projects } from "./Components/Developer/Projects/Projects";
import { Skills } from "./Components/Developer/Skills/Skills";

function App() {
  const [checked, setChecked] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: checked ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppContainer darkMode={checked}>
        <HashRouter basename="/">
          <Content>
            <NavBar checked={checked} setChecked={setChecked} />
            <Routes>
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Content>
        </HashRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
