import { WiDayLightWind } from "react-icons/wi";
import { Typography } from 'antd';

const { Link } = Typography;
const WeatherFooter = () => {
  return (
    <div>
      What's My Weather <WiDayLightWind/> Powered by <Link href="https://accuweather.com"
                                                           target="_blank"> Accuweather.com </Link>
    </div>
  )
}

export default WeatherFooter;
