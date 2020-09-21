import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';

const Header = (props) => {
  const {
  } = props;

  return (
    <Box horizontal align="center">
      <Text isTitle>BugTracker</Text>
      <Text>for addons</Text>
    </Box>
  );
};

Header.propTypes = {
};

Header.defaultProps = {
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);