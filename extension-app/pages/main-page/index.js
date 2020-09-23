import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'symphony-bdk-ui-toolkit';
import { BookBookmark, Bookmark } from 'styled-icons/boxicons-regular';
import Header from './../../components/header'
import Footer from './../../components/footer'
import BugList from './../../components/buglist'



const MainPage = (props) => {
  const {bugs} = props;

  return (
    <Box center>
        <Header />
        <BugList bugs={bugs} />
        <Footer />
    </Box>
  );
};

MainPage.propTypes = {
  bugs: PropTypes.array
};

MainPage.defaultProps = {
  bugs: null
};

export default MainPage;
