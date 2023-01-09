import React, {useContext, useEffect, useState} from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Form from "../Form/Form";
import {LangContext} from "../../Context";
import style from "./Header.module.scss"
import {CSSTransition} from "react-transition-group";

const Header = () => {
  const [color, setColor] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 1000);
  }, [])

  const handleClick = () => {
    setColor(current => !current);
  };

  const options = [
    { value: "af", label: "Afrikaans"},
    { value: "al", label: "Albanian"},
    { value: "ar", label: "Arabic"},
    { value: "az", label: "Azerbaijani"},
    { value: "bg", label: "Bulgarian"},
    { value: "ca", label: "Catalan"},
    { value: "cz", label: "Czech"},
    { value: "da", label: "Danish"},
    { value: "de", label: "German"},
    { value: "el", label: "Greek"},
    { value: "en", label: "English"},
    { value: "eu", label: "Basque"},
    { value: "fa", label: "Persian"},
    { value: "fi", label: "Finnish"},
    { value: "fr", label: "French"},
    { value: "gl", label: "Galician"},
    { value: "he", label: "Hebrew"},
    { value: "hi", label: "Hindi"},
    { value: "hr", label: "Croatian"},
    { value: "hu", label: "Hungarian"},
    { value: "id", label: "Indonesian"},
    { value: "it", label: "Italian"},
    { value: "ja", label: "Japanese"},
    { value: "kr", label: "Korean"},
    { value: "la", label: "Latvian"},
    { value: "lt", label: "Lithuanian"},
    { value: "mk", label: "Macedonian"},
    { value: "no", label: "Norwegian"},
    { value: "nl", label: "Dutch"},
    { value: "pl", label: "Polish"},
    { value: "pt", label: "Portuguese"},
    { value: "ro", label: "Romanian"},
    { value: "ru", label: "Russian"},
    { value: "sv", label: "Swedish"},
    { value: "sk", label: "Slovak"},
    { value: "sl", label: "Slovenian"},
    { value: "sp", label: "Spanish"},
    { value: "sr", label: "Serbian"},
    { value: "th", label: "Thai"},
    { value: "tr", label: "Turkish"},
    { value: "ua", label: "Ukrainian"},
    { value: "vi", label: "Vietnamese"},
    { value: "zh_cn", label: "Chinese Simplified"},
    { value: "zh_tw", label: "Chinese Traditional"},
    { value: "zu", label: "Zulu"},
  ]

  const [contextLang, setContextLang] = useContext(LangContext);
  const handleLanguageChange = event => setContextLang(event.target.value);

  return (
    <header className={color ? `${style.header} ${style.dark} ${style.titleDark}` : style.header }>
      <div className={style.wrapperLeft}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <CSSTransition
          in={showTitle}
          classNames={{
            enter: style.nameEnter,
            enterActive: style.nameEnterActive,
            exit: style.nameExit,
            exitActive: style.nameExitActive,
          }}
          timeout={100}
          unmountOnExit
        >
          <div className={style.title}>
            Small Weather App
          </div>
        </ CSSTransition>
      </div>
      <div className={style.wrapperRight}>
        <div className={style.theme} onClick={handleClick}>
          <GlobalSvgSelector id="header-theme" />
        </div>
        <div className={style.select}>
          <select className={style.language} value={contextLang} onChange = {handleLanguageChange}>
            {options.map((languages) => (
              <option key={languages.value} value={languages.value}>
                {languages.label}
              </option>
            ))}
          </select>
          <Form />
        </div>
      </div>
    </header>
  );
};

export default Header;
