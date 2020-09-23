import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Table } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';

const COLUMNS = [
    {
        header: "id",
        accessor: "id",
        width: "20"
    },
    {
        header: "Title",
        accessor: "title",
        width: "400"
    },
     {
         header: "Reported By",
         accessor: "reportedBy",
         width: "400"
     },

     {
        header: "Priority",
        accessor: "priority",
        width: "200"
     }
]

const BugList = (props) => {
  const {bugs} = props;

  return (
    <Box>
      <Table data={bugs} columns={COLUMNS} searchable />
    </Box>
  );
};

BugList.propTypes = {
};

BugList.defaultProps = {
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BugList);