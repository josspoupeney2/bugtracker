import React, { useState } from 'react';
import { Box, InputField } from 'symphony-bdk-ui-toolkit';

const InputFieldController = (props) => {
  const [input, setInput] = useState(props.value);
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
          placeholder='This is an awesome placeholder'
          value={input}
          onChange={handleInput}
        />

      </div>
    </Box>
  );
};

export default InputFieldController;
