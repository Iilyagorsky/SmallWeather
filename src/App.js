import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Weather from "./pages/Weather/Weather";
import Header from "./components/Header/Header";
import { CityContext, LangContext } from "./Context";

const App = () => {
  const [context, setContext] = useState("London");
  const [contextLang, setContextLang] = useState("en");

  return (
    <div className="innerWrapper">
      <div className="container">
        <CityContext.Provider value={[context, setContext]}>
          <LangContext.Provider value={[contextLang, setContextLang]}>
            <Header />
            <Routes>
              <Route path="/" exact element={<Weather />}/>
            </Routes>
          </LangContext.Provider>
        </CityContext.Provider>
      </div>
    </div>
  );
};

export default App;

