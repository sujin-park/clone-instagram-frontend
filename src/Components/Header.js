import React from 'react';
import styled from 'styled-components';

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
`;

export default () => (
  <Header>
    <HeaderWrapper>Hello</HeaderWrapper>
  </Header>
)
