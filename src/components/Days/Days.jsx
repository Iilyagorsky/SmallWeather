import React, {useContext, useEffect, useState} from "react";
import { Card } from "./Card";
import {getFiveDayForecastCity} from "../../api/Weather";
import Carousel from "react-multi-carousel";
import {CityContext, LangContext} from "../../Context";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.scss"
import style from "./Days.module.scss"

export const Days = () => {

  const metrics = "metric";

  const [weather, setWeather] = useState([]);
  const [context, setContext] = useContext(CityContext);
  const [contextLang, setContextLang] = useContext(LangContext);

  const getWeather = async () => {
    const response = await getFiveDayForecastCity(context, contextLang, metrics);
    if (response instanceof Error) {
      console.log(response.message);

      return;
    }
    setWeather(response.list);
  };

  useEffect(() => {
    getWeather();
  }, [setWeather, context, contextLang]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 6
    },
    desktop_small: {
      breakpoint: { max: 1100, min: 940 },
      items: 5
    },
    tablet_medium: {
      breakpoint: { max: 940, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 580 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 2,
      slidesToSlide: 2
    }
  };

  return (
    <div className={style.wrapper}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={40}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
      {weather.map((day) => {
        return (
            <Card day={day} key={day.dt}/>
          )
      })}
      </Carousel>
    </div>
  );
};