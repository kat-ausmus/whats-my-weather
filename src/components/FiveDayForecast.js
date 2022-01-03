import { Card, Empty } from 'antd';
import { OneDayForecast } from './OneDayForecast';
import Title from 'antd/es/typography/Title';

const FiveDayForecast = (props) => {
  const currState = props.state;
  if (currState.fiveDayForecast.headline) {
    const { headline, dailyForecasts } = currState.fiveDayForecast;
    return (
      <Card>
        <Title level={4} type="secondary">{headline}</Title>
        {dailyForecasts.map((day) => <OneDayForecast key={day.epochDate} day={day}/>)}
      </Card>
    )
  } else {
    return (
      <>
        <Title level={3}>Five Day Forecast</Title>
        <Empty/>
      </>
    )
  }
}

export default FiveDayForecast;
