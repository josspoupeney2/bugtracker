import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Table } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';

const data = [
    {
      "id": 35,
      "reportedBy": "Lucas Rovaris",
      "createdDate": "20111999",
      "status": "open",
      "title": "my second bug",
      "description": "this is a bug",
      "priority": "high",
      "lastupdate": "20111989220322",
      "isDeleted": false
    },
    {
          "id": 36,
          "reportedBy": "LeBron James",
          "createdDate": "20111999",
          "status": "open",
          "title": "my third bug",
          "description": "this is a bug",
          "priority": "high",
          "lastupdate": "20111989220322",
          "isDeleted": false
        }
]

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
  const {
  } = props;

  return (
    <Box>
      <Table data={data} columns={COLUMNS} />
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