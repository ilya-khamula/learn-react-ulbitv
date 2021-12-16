import React from 'react';
import './form-button.scss'

const FormButton = ({children, ...props}) => {
  return (
    <button {...props} className='form-btn'>
      {children}
    </button>
  );
};

export default FormButton;