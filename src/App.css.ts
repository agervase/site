import styled from "@emotion/styled";

export const AppContainer = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: calc(10px + 2vmin);
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;
