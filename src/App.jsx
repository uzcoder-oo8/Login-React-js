import "./App.css";

import { useState } from "react";

import Tillar from "./Lang/Lang";

function App() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const [lang, setLang] = useState("en");

  const [theme, setTheme] = useState("light");

  function sircleFn(evt) {
    setTheme(evt.target.value);
    window.document.getElementById("body").classList.toggle("dark");
  }

  function login() {
    if (user == " " || password == " ") {
      alert("malumot kiriting");
    } else {
      window.open("https://t.me/sardortoxtoshov");
      window.localStorage.setItem("User", user);
      window.localStorage.setItem("Password", password);
    }
  }

  return (
    <div className="container">
      <div className="box_1">
        <select defaultValue={theme} onChange={(evt) => sircleFn(evt)}>
          <option value="light">light</option>
          <option value="dark">teal</option>
        </select>

        <h1 className="head">{Tillar[lang].header.title1}</h1>
        <select onChange={(Evt) => setLang(Evt.target.value)}>
          <option value={"en"}>en</option>
          <option value={"uz"}>uz</option>
          <option value={"ru"}>ru</option>
        </select>
      </div>
      <div className="box">
        <input
          type="text"
          className="input"
          onChange={(evt) => setUser(evt.target.value)}
          placeholder={Tillar[lang].header.title2}
        />
        <input
          className="input"
          type="password"
          onChange={(evt) => setPassword(evt.target.value)}
          placeholder={Tillar[lang].header.title3}
        />

        <button className="button" onClick={login}>
          {Tillar[lang].header.title4}
        </button>
      </div>
    </div>
  );
}

export default App;
