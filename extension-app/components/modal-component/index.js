import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Box, Text, Separator, Button, FormBox} from 'symphony-bdk-ui-toolkit';
import InputFieldController from "../inputfield-controller";


const EditModal = (props) => {
const {bug} = props;
const [values, setValues] = useState(bug);
  return (
<Box>
     <Box horizontal align="center">
       <Text style={{width:'80px'}}>Addon Name:</Text>
       <InputFieldController showJoss={true} onChangeHandler={(e) => setValues({...values, addon: e})} id="addonName" type="text" value={bug.addon}/>
     </Box>

     <Box horizontal align="center">
       <Text style={{width:'80px'}}>Title:</Text>
       <InputFieldController showJoss={true} onChangeHandler={(e) => setValues({...values, title: e})} id="title" type="text" value={bug.title}/>
     </Box>

     <Box horizontal align="center">
        <Text style={{width:'80px'}}>Description:</Text>
        <InputFieldController showJoss={true} onChangeHandler={(e) => setValues({...values, description: e})} id="description" type="textarea" description={bug.description}/>
     </Box>

     <Box horizontal align="center">
        <Text style={{width:'200px'}}></Text>
        <Button fill="filled" type="secondary" onClick={() => submitForm()}>
         <span>Submit</span>
        </Button>
     </Box>

</Box>
  )
};




export default  EditModal;
