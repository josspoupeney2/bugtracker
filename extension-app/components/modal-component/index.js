import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Box, InputField, Text, Separator, Button, FormBox} from 'symphony-bdk-ui-toolkit';


const InputFieldController = (props) => {
  const [input, setInput] = useState('');
  const {
    onChangeHandler
  } = props;

  function handleInput(e) {
    setInput(e.target.value);
    onChangeHandler(e.target.value);
  }
  return (
    <Box vertical space={20}>
      <div style={{ width: '24rem' }}>
        <InputField
          {...props}
          value={input || props.value}
          onChange={handleInput}
        />
      </div>
    </Box>
  );
};


const EditModal = (props) => {
const {bug} = props;
const [values, setValues] = useState(bug);
  return (
<Box>
     <Box horizontal align="center">
       <Text style={{width:'80px'}}>Addon Name:</Text>
       <InputFieldController onChangeHandler={(e) => setValues({...values, addon: e})} id="addonName" type="text" value={bug.addon}/>
     </Box>

     <Box horizontal align="center">
       <Text style={{width:'80px'}}>Title:</Text>
       <InputFieldController onChangeHandler={(e) => setValues({...values, title: e})} id="title" type="text" value={bug.title}/>
     </Box>

     <Box horizontal align="center">
        <Text style={{width:'80px'}}>Status:</Text>
        <InputFieldController onChangeHandler={(e) => setValues({...values, status: e})} id="status" type="text" value={bug.status}/>
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
