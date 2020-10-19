import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Table, Cell, ModalConsumer} from 'symphony-bdk-ui-toolkit';
import { connect } from 'react-redux';
import {CustomCellWrapper} from '../custom-cellwrapper';
import styled from 'styled-components';
import EditModal from '../modal-component'

var contextModal;


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
     },
     {
        id: 'actions',
        sortable: false,
        width: 50,
        hasActions: true,
      }
];


const handleEditBug = (elem) => {
  console.log("Edit " + elem.row.values.title)
  contextModal.showModal(
            EditModal,
            {bug: elem.row.values},
            {style:{width:'600px'}, modalTitle:'Edit Bug ' +elem.row.values.id},
          )
};
const handleDeleteBug = (elem) => {
  console.log("Delete " + elem.row.values.title)
};

const BugList = (props) => {
  const {bugs} = props;
  const [tableData, setTableData] = useState([]);

  useEffect( () => {
   if (bugs.length > 0) {
     const tempData = bugs.map(elem => {
       elem.actionsMenu = [{
          label: 'Edit',
          callback: handleEditBug,
          type: 'info'
        },
        {
          label: 'Delete',
          callback: handleDeleteBug,
          type: 'error'
        }];
       return elem;
     })
     setTableData(tempData);
   }
 }, [bugs]);

  return (
    <ModalConsumer>
          {context => {
            contextModal = context;
            return (
            <Box>
              <Table data={tableData} columns={COLUMNS} searchable />
            </Box>
          )}}
    </ModalConsumer>
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
