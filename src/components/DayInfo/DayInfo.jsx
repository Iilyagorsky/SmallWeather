import React from "react";
import ThisDayItem from "./ThisDayItem";
import style from "./DayInfo.module.scss"

const DayInfo = ({ weatherMain, weatherWind, weatherSys }) => {

  const items = [
    {
      icon_id: "temp",
      name: "Feels like",
      value: `${weatherMain.feels_like}°`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${weatherMain.pressure} mm`,
    },
    {
      icon_id: "precipitation",
      name: "Humidity",
      value: `${weatherMain.humidity} %`,
    },
    {
      icon_id: "sunrise",
      name: "Sunrise",
      value: `${new Date(weatherSys.sunrise * 1000).toLocaleTimeString()}`,
    },
    {
      icon_id: "sunset",
      name: "Sunset",
      value: `${new Date(weatherSys.sunset * 1000).toLocaleTimeString()}`,
    },
    {
      icon_id: "windsock",
      name: "Wind",
      value: `${weatherWind.speed} m/sec`,
    },
  ];
  return (
    <div className={style.dayInfo}>
      <div className={style.dayItems}>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DayInfo;
