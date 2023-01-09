import style from "./Weather.module.scss";
import React from "react";

const BackgroundSelector = () => {
  let url;
  const time = new Date().getHours();
  const zero = 0;
  const morning = 6;
  const midday = 12;
  const evening = 18;
  const night = 23;

  if (zero <= time && time <= morning) {
    url = require('../../assets/images/morning.jpg')
  } else if (morning < time && time <= midday) {
    url = require('../../assets/images/midday.jpg')
  } else if (midday < time && time <= evening) {
    url =  require('../../assets/images/evening.jpg')
  } else if (evening < time && time <= night) {
    url =  require('../../assets/images/night.jpg')
  }

  return (
    <img className={style.backImage} src={url} alt="mountain" />
  );
}

export default BackgroundSelector;
