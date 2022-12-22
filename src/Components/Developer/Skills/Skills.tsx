import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import { SkillEntry, TECHNICAL_SKILLS, SOFT_SKILLS } from "./mySkills";
import { Container, SkillItem, Column } from "./Skills.css";

export const Skills = () => {
  const renderRating = (rating: number) => {
    return (
      <div>
        {Array(rating)
          .fill(1)
          .map((_) => (
            <GradeIcon />
          ))}
        {Array(5 - rating)
          .fill(1)
          .map((_) => (
            <GradeOutlinedIcon />
          ))}
      </div>
    );
  };
  const renderSkillList = (skillList: SkillEntry[]) => {
    return (
      <>
        {skillList.map((skill) => (
          <SkillItem>
            {skill.skill} {renderRating(skill.rating)}
          </SkillItem>
        ))}
      </>
    );
  };
  return (
    <Container>
      <Column>{renderSkillList(TECHNICAL_SKILLS)}</Column>
      <Column>{renderSkillList(SOFT_SKILLS)}</Column>
      <Column />
    </Container>
  );
};
