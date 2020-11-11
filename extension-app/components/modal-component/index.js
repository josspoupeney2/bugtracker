import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Box, Text, Separator, Button, FormBox, Dropdown} from 'symphony-bdk-ui-toolkit';
import InputFieldController from "../inputfield-controller";
import {OPTIONS} from '../../utils/system/app-const'
import { updateBug } from 'reducers/bugs/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';


const EditModal = (props) => {
const {bug,actions} = props;
const [values, setValues] = useState(bug);

const submitForm = async () => {
  console.log("submitForm", values)
  try {
    await actions.updateBug({...values, changed: moment().format('YYYY-MM-DD hh:mm:ss')});
    props.hideModal();
  } catch (e) {
    console.log('crap', e);
  }
}

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
       <Text style={{width:'80px'}}>Status:</Text>
         <Box style={{ width: '300px' }}>
           <Dropdown  label="" options={OPTIONS} chosenValue={values.status} onChange={(e) => setValues({...values, status: e.value})} />
         </Box>
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

EditModal.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateBug }, dispatch),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
