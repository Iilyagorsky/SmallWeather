import React, {useContext, useEffect, useState} from "react";
import Day from "../../components/Day/Day";
import DayInfo from "../../components/DayInfo/DayInfo";
import {Days} from "../../components/Days/Days";
import {getCurrentWeatherCity} from "../../api/Weather";
import {CityContext, LangContext} from "../../Context";
import BackgroundSelector from "./Background";
import style from "./Weather.module.scss"

const Weather = () => {

  const metrics = "metric";

  const [weatherMain, setWeatherMain] = useState([]);
  const [weather, setWeather] = useState([]);
  const [weatherWind, setWeatherWind] = useState([]);
  const [weatherCloud, setWeatherCloud] = useState([]);
  const [weatherSys, setWeatherSys] = useState([]);
  const [context, setContext] = useContext(CityContext);
  const [contextLang, setContextLang] = useContext(LangContext);

  const getWeather = async () => {
    const response = await getCurrentWeatherCity(context, contextLang, metrics);
    if (response instanceof Error) {
      console.log(response.message);

      return;
    }
    setWeatherMain(response.main);
    setWeather(response.weather[0]);
    setWeatherWind(response.wind);
    setWeatherCloud(response.clouds);
    setWeatherSys(response.sys);
  };

  useEffect(() => {
    getWeather();
  }, [setWeatherMain, context, contextLang]);

  return (
    <div className={style.weather}>
      <BackgroundSelector />
      <div className={style.dayWrapper}>
        <Day
          weather={weather}
          weatherMain={weatherMain}
          city={context}
        />
        <DayInfo
          weather={weather}
          weatherMain={weatherMain}
          weatherWind={weatherWind}
          weatherCloud={weatherCloud}
          weatherSys={weatherSys}
        />
      </div>
      <div className={style.daysWrapper}>
        <Days />
      </div>
    </div>
  );
};

export default Weather;
