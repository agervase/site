import styled from "@emotion/styled";
import { Tab } from "@mui/material";

export const StyledTab = styled(Tab)`
  color: gray;
  &:hover {
    color: purple;
  }
  &.Mui-selected {
    color: pink;
  }
`;

export const EntryContainer = styled.div`
  margin: 20px 0;
`;
