import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Table, Cell, } from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';
import {CustomCellWrapper} from '../custom-cellwrapper';
import styled from 'styled-components';

const CellWrapperOpen = styled(Box)`
  margin: 0px 19px;
  align-items: start;
  justify-content: center;
  height: 100%;
  background-color: red;
  color: white;
`;

const CellWrapperClosed = styled(Box)`
  margin: 0px 19px;
  align-items: start;
  justify-content: center;
  height: 100%;
  background-color: green;
  color: white;
`;

const COLUMNS = [
    {
        header: "ID",
        accessor: "id",
        width: "80"
    },
    {
        header: "Addon",
        accessor: "addon",
        width: "300"
    },
    {
        header: "Title",
        accessor: "title",
        width: "300"
    },
    {
       header: "Status",
       accessor: "status",
       width: "80",
       Cell: ({cell}) => {
          if (cell.value == "Open") {
            return (
             <CellWrapperOpen>

                  {cell.value}

             </CellWrapperOpen>
            )
          } else {
           return (
            <CellWrapperClosed>

                 {cell.value}
            </CellWrapperClosed>
           )
          }
       }
    },
     {
         header: "Changed",
         accessor: "changed",
         width: "300"
     }

]

const BugList = (props) => {
  const {bugs,} = props;

  return (

    <Box>
      <Table data={bugs} columns={COLUMNS} searchable />
    </Box>
  );
};

BugList.propTypes = {
  bugs: PropTypes.array,
};

BugList.defaultProps = {
  bugs: [],
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BugList);
