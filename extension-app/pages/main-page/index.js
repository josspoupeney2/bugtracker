import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, NavTabs, Text } from 'symphony-bdk-ui-toolkit';
import { BookBookark, Bookmark } from 'styled-icons/boxicons-regular';
import Header from './../../components/header'
import Footer from './../../components/footer'
import BugList from './../../components/buglist'
import BuglistPage from './../buglist-page'



const MainPage = (props) => {
const {bugs} = props;
  return (
    <Box>
        <Header />
        <NavTabs activeTab={0}>
        <div label="Bug List">
           <BugList bugs={bugs} />
        </div>
       <div label="Set Up">
         <Text small>This is a content for Info</Text>
       </div>
     </NavTabs>
        <Footer />
    </Box>
  );
};

BuglistPage.propTypes = {
  bugs: PropTypes.array
};

BuglistPage.defaultProps = {
  bugs: []
};

export default MainPage;
