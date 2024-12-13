import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: 20px;
  width: 1024px;
  height: 100vh;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSize.medium};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <h1>テーマ変更例</h1>
      <hr />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Wrapper>
          <h1>{isDarkTheme ? ' ダークモード ': ' ライトモード '}</h1>
          <Button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          >テーマを変更します</Button>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;