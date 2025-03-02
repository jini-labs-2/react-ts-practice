import React, { ReactNode } from 'react'
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#Bf4f74" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const ToButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Button1 = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`;

const ReversedButton = (props: any) => {
  const reversedText = typeof props.children === 'string'
    ? props.children.split('').reverse().join('')
    : props.children;
  return <Button {...props}>{reversedText}</Button>;
}

const Link = ({className, children }:{className?: string, children: ReactNode}) => (
  <a className={className} href='#'>
    {children}
  </a>
)

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`

const Input = styled.input<{ $inputColor?: string; }>`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  color: ${(props: any) => props.$inputColor || "#bf4f74"}; 
`

const StyledTest = () => {
  return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
      <Button>Normal</Button>
      <br />
      <Button $primary>primary</Button>
      <br />
      <ToButton>tomato button</ToButton>
      <br />
      <Button as="a" href="https://yahoo.co.jp">Link with Button styles</Button>
      <br />
      <ToButton as="a" href="https://yahoo.co.jp">Link with Tomato Button styles</ToButton>
      <br />
      <Button1 as={ReversedButton}>Custom Button with Normal Button styles</Button1>
      <br />
      <Link>unstyled boring link</Link>
      <br />
      <StyledLink>Styled, exciting link</StyledLink>
      <br />
      <Input type='text' />
      <Input type='text' $inputColor="blue" />
    </Wrapper>
  )
}

export default StyledTest