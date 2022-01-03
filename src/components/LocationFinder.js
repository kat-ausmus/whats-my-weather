import React from 'react';
import { AutoComplete } from 'antd';


const { Option } = AutoComplete;
const format = (location) => (`${location.city}, ${location.state} ${location.country}`);
const LocationFinder = (props) => {
  const currState = props.state
  console.debug('Location finder render: currState', currState);

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
    >
      {currState.searchResults.map((location) => (
        <Option key={location.key} value={format(location)}>
          {format(location)}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default LocationFinder
