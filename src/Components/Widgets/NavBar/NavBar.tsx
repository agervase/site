import { Typography, Switch } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HeaderContainer, LinkContainer } from "./NavBar.css";

interface Props {
  checked: boolean;
  setChecked: (check: boolean) => void;
}

export const NavBar = ({ checked, setChecked }: Props) => {
  const navigate = useNavigate();

  const switchModes = () => {
    setChecked(!checked);
    navigate("/");
  };

  return (
    <>
      <HeaderContainer className="App-header">
        <Typography variant="h2">Abby Gervase</Typography>
        <Switch
          checked={checked}
          onChange={switchModes}
          inputProps={{ "aria-label": "controlled" }}
        />
        {checked ? (
          <LinkContainer>
            <Link to="/education"> Education</Link>
            <Link to="/experience"> Experience</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/skills"> Skills</Link>
          </LinkContainer>
        ) : (
          <LinkContainer></LinkContainer>
        )}
      </HeaderContainer>
    </>
  );
};
