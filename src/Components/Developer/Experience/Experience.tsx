import React from "react";
import { ExperienceEntryContainer } from "./Experience.css";
import { EXPERIENCES } from "./experiences";

export const Experience = () => {
  return (
    <>
      {EXPERIENCES.map((experience) => (
        <ExperienceEntryContainer>
          <h3>{experience.organization}</h3>
          <h4>{experience.role}</h4>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <ul>
            {experience.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </ExperienceEntryContainer>
      ))}
    </>
  );
};
