import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { AppContainer, Content, HeaderContainer } from "./App.css";
import { DeveloperPage } from "./Components/Developer/Developer";
import { WriterPage } from "./Components/Writer/Writer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
        <Content>
          <HeaderContainer className="App-header">
            <Typography variant="h2">Abby Gervase</Typography>
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </HeaderContainer>
          {checked ? <DeveloperPage /> : <WriterPage />}
        </Content>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
