import React, { useState, useEffect } from 'react';
import {Box, InputField, Text, Separator, Button, FormBox} from 'symphony-bdk-ui-toolkit';
import { createBug } from 'reducers/bugs/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import InputFieldController from "../inputfield-controller";


const CreateBug = (props) => {
const [values, setValues] = useState({});
const {
   actions
} = props;

const submitForm = () => {
  actions.createBug({...values, status: 'Open', changed: moment().format('YYYY-MM-DD')});
}

  return (

<Box>
      <Text isTitle={true} style={{margin:'500px !important'}}>File a bug</Text>
        <Separator />
              <Box horizontal align="center">
        <Text style={{width:'150px'}}>Addon Name:</Text>
        <InputFieldController onChangeHandler={(e) => setValues({...values, addon: e})} id="addonName" type="text" value=""/>
      </Box>
     <Box horizontal align="center">
       <Text style={{width:'150px'}}>Title:</Text>
       <InputFieldController onChangeHandler={(e) => setValues({...values, title: e})} id="title" type="text" value=""/>
     </Box>
     <Box horizontal align="center">
        <Text style={{width:'150px'}}>Description:</Text>
        <InputFieldController onChangeHandler={(e) => setValues({...values, description: e})} id="description" type="textarea" value=""/>
     </Box>
     <Box horizontal align="center">
        <Text style={{width:'180px'}}></Text>
       <Button onClick={() => submitForm()}>Submit</Button>
     </Box>
</Box>
  );
};

CreateBug.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createBug }, dispatch),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBug);
