import React from 'react';
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router'
import Header from './Header'
import Footer from './Footer'

const QUERY = gql`
  {
    isLoggeddIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const { data } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header/>
      <Wrapper>
        <Router isLoggeddIn={(data || {}).isLoggeddIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
      </Wrapper>
    </ThemeProvider>
  );
};
