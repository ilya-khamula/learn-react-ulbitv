import React from 'react';

const SortSelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
      style={{width: '200px', height: '36px', marginRight: '20px', paddingLeft: '16px'}}
    >
      <option disabled={true} value=''>{defaultValue}</option>
      {options.map(option =>
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default SortSelect;