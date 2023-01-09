import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Clock from "../Clock/Clock";
import style from "./Day.module.scss"

const Day = ({ weather, weatherMain, city }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <div className={style.info}>
          <div className={style.temp}>{weatherMain.temp}°C</div>
          <div className={style.description}>{weather.description}</div>
        </div>
        <GlobalSvgSelector id={weather.icon} />
      </div>
      <div className={style.bottom}>
        <div className={style.time}>
          Time: <span> <Clock /></span>
        </div>
        <div className={style.city}>
          City: <span> {city} </span>
        </div>
      </div>
    </div>
  );
};

export default Day;
