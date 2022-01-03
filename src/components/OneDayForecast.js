import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { Card } from 'antd';
import * as dayjs from 'dayjs';

const formatTemperature = (temp) => `${temp} \xB0 F`;
const gridStyle = {
  width: '20%',
  textAlign: 'center',
};
export const OneDayForecast = (props) => {
  const { day } = props;
  const dateStr = dayjs.unix(day.epochDate).format('MMM DD');
  const { lowTemperature: low, highTemperature: high } = day;
  return (
    <Card.Grid style={gridStyle}>
      <Text type="secondary">{dateStr}</Text>
      <Title level={5} type="secondary">High</Title>
      <Title level={4}>{formatTemperature(high)}</Title>
      <Title level={5} type="secondary">Low </Title>
      <Title level={4}>{formatTemperature(low)}</Title>
    </Card.Grid>
  )
}
