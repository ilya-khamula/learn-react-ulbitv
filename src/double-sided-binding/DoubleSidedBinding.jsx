import React, {useState} from 'react';

const DoubleSidedBinding = () => {
  const [value, setValue] = useState('value');

  return (
    <div>
      <p>{value}</p>
      <input onChange={event => setValue(event.target.value)} value={value} type="text"/>
    </div>
  );
};

export default DoubleSidedBinding;