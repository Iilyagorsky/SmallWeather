import React from "react";
import {IndicatorSvgSelector} from "../../assets/icons/indicators/IndicatorSvgSelector";
import style from "./ThisDayItem.module.scss";

const ThisDayItem = ({ item }) => {
  const { icon_id, name, value } = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={style.description}>
        <div className={style.indicatorName}>{name}</div>
        <div className={style.indicatorValue}>{value}</div>
      </div>
    </div>
  );
};

export default ThisDayItem;