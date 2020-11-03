import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {DangerConfirmationModal} from 'symphony-bdk-ui-toolkit';
import { deleteBug } from 'reducers/bugs/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Confirmation = (props) => {
  const {bug,actions} = props;

  const confirmDelete = async () => {
    console.log("confirm delete", props.bug)
    try {
      await actions.deleteBug(props.bug);
      props.hideModal();
    } catch (e) {
      console.log('crap', e);
    }
  }

  return(
    <DangerConfirmationModal
      {...props}
      confirmButtonText="Yes, I'm sure"
      message="Your bug will be deleted"
      modalTitle="Are you sure?"
      confirmationHandler={confirmDelete}
    />
  );
}

Confirmation.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deleteBug }, dispatch),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
