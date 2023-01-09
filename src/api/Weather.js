import axios from "axios";

const key = '0d5a6a3756062515fd4a09f2a605939d'

export const getCurrentWeatherCity = async (city, lang, metrics) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${metrics}&appid=${key}`)
    return response.data;

  } catch (error) {
    return error;
  }
};

export const getFiveDayForecastCity = async (city, lang, metrics) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${metrics}&appid=${key}`)
    return response.data;

  } catch (error) {
    return error;
  }
};