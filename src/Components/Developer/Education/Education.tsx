import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { EntryContainer } from "../Developer.css";
import { Flex } from "./Education.css";

export const Education = () => {
  const [page, setPage] = useState(2);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const renderEducation = () => {
    switch (page) {
      case 1: {
        return (
          <EntryContainer>
            <h2>Drexel University</h2> <p>Aug 2022 - </p>
            <h3>M.F.A. in Creative Writing</h3>
            <h4>GPA: 4.0</h4>
          </EntryContainer>
        );
      }
      case 2: {
        return (
          <EntryContainer>
            <Flex>
              <h2>University of Notre Dame</h2>
              <h4>GPA: 3.60</h4>
              <p>Aug 2015 - Dec 2019</p>
            </Flex>
            <h4>John J. Reilly Dual-Degree Program</h4>
            <Flex>
              <h3>B.S. in Computer Science</h3>
              <h3>B.A. in English</h3>
            </Flex>
            <Flex>
              <div>
                <p>Relevant Coursework</p>
                <ul>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
              <div>
                <p>Activities</p>
                <ul>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </Flex>
          </EntryContainer>
        );
      }
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination count={3} page={page} onChange={handleChange} />
      </Stack>
      {renderEducation()}
    </>
  );
};
