import React, { useState, useEffect } from 'react';
import {Box, ModalConsumer, ModalProvider, Button, FormBox, ModalRoot} from 'symphony-bdk-ui-toolkit';
import Confirmation from '../confirmation-delete'

const DeleteModal = (props) => {
return(

    <ModalProvider>
         <ModalRoot />
         <Box horizontal style={{
       height: '270px'
     }} align="center" justify="center">
             <ModalConsumer>
               {context => <Button type="danger" onClick={() => context.showModal(Confirmation, {}, {})}>Delete</Button>}
             </ModalConsumer>
         </Box>
       </ModalProvider>
)
};

   export default DeleteModal;
