import { Button } from "@mui/material";
import React, { useState } from "react";
import { EntryContainer } from "../Developer.css";
import {
  ButtonContainer,
  ExperiencesContainer,
  StyledButton,
} from "./Experience.css";
import { EXPERIENCES } from "./experiences";

//make these tabs? but cuter? tbd
export const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderExperience = () => {
    const experience = EXPERIENCES[currentIndex];
    return (
      <EntryContainer>
        <h3>{experience.organization}</h3>
        <h4>{experience.role}</h4>
        <p>{experience.dateString}</p>
        <ul>
          {experience.bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      </EntryContainer>
    );
  };

  return (
    <ExperiencesContainer>
      <ButtonContainer>
        {EXPERIENCES.map((experience, index) => (
          <StyledButton
            variant="contained"
            onClick={() => setCurrentIndex(index)}
          >
            {experience.buttonText}
          </StyledButton>
        ))}
      </ButtonContainer>
      <div>{renderExperience()}</div>
    </ExperiencesContainer>
  );
};
