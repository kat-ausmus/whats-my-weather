import { Card, Empty } from 'antd';
import { OneDayForecasts } from './OneDayForecast';
import Title from 'antd/es/typography/Title';

const FiveDayForecast = (props) => {
  const currState = props.state;
  if (currState.fiveDayForecasts.headline) {
    const { headline, dailyForecasts } = currState.fiveDayForecasts;
    return (
      <Card>
        <Title level={4} type="secondary">{headline}</Title>
        {dailyForecasts.map((day) => <OneDayForecasts key={day.epochDate} day={day}/>)}
      </Card>
    )
  } else {
    return (
      <>
        <Title level={3}>Five Day Forecasts</Title>
        <Empty/>
      </>
    )
  }
}

export default FiveDayForecast;
