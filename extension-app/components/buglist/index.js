import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Table } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';


const BugList = (props) => {
  const {bugs,columns} = props;

  return (
    <Box>
      <Table data={bugs} columns={columns} searchable />
    </Box>
  );
};

BugList.propTypes = {
  bugs: PropTypes.array,
  columns: PropTypes.array
};

BugList.defaultProps = {
  bugs: [],
  columns: []
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BugList);
