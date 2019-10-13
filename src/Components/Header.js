import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useInput from '../../Hooks/useInput';

const Header = styled.header`
  ${props => props.theme.whiteBox};
  width: 100%;
  border: 0;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
`;

const HeaderColumn = styled.div``;


export default () => {
  const search = useInput("");
  return (
    <Header>
      <HeaderWrapper>Hello</HeaderWrapper>
      <HeaderColumn>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24  24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691"/>
          </svg>
        </Link>
      </HeaderColumn>
      <HeaderColumn>
        <form>
        </form>
      </HeaderColumn>
    </Header>
  )
}
