import React from 'react';
import { AutoComplete } from 'antd';


const { Option } = AutoComplete;
const format = (location) => (`${location.city}, ${location.state} ${location.country}`);
const LocationFinder = (props) => {
  const currState = props.state

  return (
    <AutoComplete
      style={{
        width: '20rem',
      }}
      onSearch={props.onSearch}
      onSelect={props.onSelect}
      placeholder='Enter City, State or Enter Zip Code'
      allowClear={true}
      autoFocus={true}
      defaultActiveFirstOption={true}
      data-testid="autocomplete"
    >
      {currState.searchResults.map((location) => (
        <Option data-testid={location.key} key={location.key} value={format(location)}>
          {format(location)}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default LocationFinder
