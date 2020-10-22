import React, {useState} from 'react';
import {Box, Dropdown} from 'symphony-bdk-ui-toolkit';


const DropdownHandler = (props) => {
  const [chosen, changeChosen] = useState(null);

  return (
    <Box style={{ width: '300px' }}>
      <Dropdown {...props} value={chosen} onChange={changeChosen} />
    </Box>
  );
};

export default DropdownHandler;
