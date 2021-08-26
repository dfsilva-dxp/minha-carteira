import { RiMoonFoggyLine, RiSunFoggyLine } from "react-icons/ri";

import { useState } from "react";
import Switch from "react-switch";

import * as S from "./styles";

const ToggleButtonTheme = () => {
  const [toggle, setToggle] = useState(true);

  function handleChange() {
    setToggle(!toggle);
  }

  return (
    <S.ToggleContent>
      <label>
        <Switch
          checked={toggle}
          onChange={handleChange}
          onColor="#191A1C"
          offColor="#F2F3F5"
          onHandleColor="#28292D"
          offHandleColor="#28292D"
          uncheckedIcon={
            <RiSunFoggyLine
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#48494D",
                fontSize: 22,
                marginLeft: 3,
              }}
            />
          }
          checkedIcon={
            <RiMoonFoggyLine
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#48494D",
                fontSize: 20,
                marginLeft: 6,
              }}
            />
          }
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          className="react-switch"
          id="material-switch"
        />
      </label>
    </S.ToggleContent>
  );
};

export default ToggleButtonTheme;
