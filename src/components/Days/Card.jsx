import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import style from "./Cards.module.scss";


const moment = require("moment");
const d = new Date("2019/06/01");
moment(d).format("MMMM d, YYYY");


export const Card = ({ day }) => {
  return (
    <div className={style.card}>
      <div className={style.day}>{moment(new Date(day.dt_txt)).format("dddd").toString()}</div>
      <div className={style.dayInfo}>{moment(new Date(day.dt_txt)).format("MMM DD, h:mm a").toString()}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={day.weather[0].icon} />
      </div>
      <div className={style.tempDay}>{day.main.temp_max.toFixed(0)} °C</div>
      <div className={style.tempNight}>Feels like {day.main.feels_like.toFixed(0)} °C</div>
      <div className={style.info}>{day.weather[0].description}</div>
    </div>
  );
};