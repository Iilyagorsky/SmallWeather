import React, {useContext, useState} from "react";
import { CityContext} from "../../Context";
import SearchIcon from "@mui/icons-material/Search";
import style from "./Form.module.scss"


const Form = () => {
  const [name, setName] = useState("");
  const [context, setContext] = useContext(CityContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className={style.wrapper} onSubmit = {handleSubmit}>
        <input
          id="search"
          className={style.input}
          onChange = {(e) => setName(e.target.value)}
          value = {name}
          placeholder="Enter city name"
        >
        </input>
        <button
          className={style.submit}
          type = "submit"
          onClick={() => setContext(name.trim())}
        >
          <SearchIcon className={style.icon}/>
        </button>
      </form>
    </>
  );

}

export default Form;