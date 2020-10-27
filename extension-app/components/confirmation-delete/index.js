import React from 'react';
import {DangerConfirmationModal} from 'symphony-bdk-ui-toolkit';


const Confirmation = props => (
  <DangerConfirmationModal
    {...props}
    confirmButtonText="Yes, I'm sure"
    message="Your bug will be deleted"
    modalTitle="Are you sure?"
    confirmationHandler={() => console.log('Confirmed')}
  />
);


export default Confirmation;
