import React from 'react';
import Buglist from './../../components/buglist';
import PropTypes from 'prop-types';


const COLUMNS = [
    {
        header: "ID",
        accessor: "id",
        width: "20"
    },
    {
        header: "Addon",
        accessor: "addon",
        width: "300"
    },
    {
        header: "Title",
        accessor: "title",
        width: "400"
    },
    {
       header: "Status",
       accessor: "status",
       width: "200"
    },
    {
         header: "Reported By",
         accessor: "reportedBy",
         width: "400"
     }
]

const BuglistPage = (props) => {
const {bugs} = props;
  return (
    <Buglist columns={COLUMNS} data={bugs} />
  );
};

BuglistPage.propTypes = {
  bugs: PropTypes.array
};

BuglistPage.defaultProps = {
  bugs: []
};
export default BuglistPage;
