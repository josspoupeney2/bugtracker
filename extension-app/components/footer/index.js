import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';

const Footer = (props) => {
  const {
  } = props;

  return (
    <Box>
     <Text>Site hosted by Acme</Text>
    </Box>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);