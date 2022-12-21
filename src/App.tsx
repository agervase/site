import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { AppContainer, Content, HeaderContainer } from "./App.css";
import { DeveloperPage } from "./Components/Developer/Developer";
import { WriterPage } from "./Components/Writer/Writer";

function App() {
  const [checked, setChecked] = useState(true);

  return (
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
  );
}

export default App;
