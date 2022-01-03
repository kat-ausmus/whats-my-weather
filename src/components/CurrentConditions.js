import { Card, Empty, Image } from 'antd';
import * as dayjs from 'dayjs';
import '../App.css';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

const style = {
  marginTop: '1px',
}

const CurrentConditions = (props) => {
  const currState = props.state;
  const { currentConditions } = currState;

  if (currentConditions.length > 0) {
    const firstOne = currentConditions[0];
    const iconName = firstOne.icon.toString().padStart(2, '0');
    const currentTime = dayjs.unix(firstOne.epochTime).format('MMM DD YYYY hh:mm a');
    const imageUrl = `https://developer.accuweather.com/sites/default/files/${iconName}-s.png`
    return (
      <Card>
        <Title level={2}>{currState.selectedLocation}</Title>
        <Text type="secondary">{currentTime}</Text>
        <Title level={4} type="secondary" className={style}>Current Conditions</Title>
        <Title level={3} style={style}>{firstOne.conditionDescription}</Title>
        <Image width={60} src={imageUrl}/>
        <Title level={4} type="secondary" style={style}>Current Temperature</Title>
        <Title level={3} style={style}>{firstOne.temperature + '\xB0 F'}</Title>
      </Card>
    )
  } else {
    return (
      <>
        <Title level={3}>Current Conditions</Title>
        <Empty/>
      </>
    )
  }

}

export default CurrentConditions;
