import { SyntheticEvent, useRef, useState } from "react";
import { RiCalendar2Line, RiArrowUpSLine } from "react-icons/ri";

import InputFilterMonthAndYear from "../Inputs/InputFilterMonthAndYear";

import { useOutsideClick } from "../../hooks/useOutsideClick";

import * as S from "./styles";

const Filter = () => {
  const [value, setValue] = useState("todos");

  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false);

  function handleUseOutsideClick() {
    setIsActive(!isActive);
  }

  function handleChange(event: SyntheticEvent) {
    const value = (event.target as HTMLInputElement).value;
    const date = new Date(value).toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });
    setValue(String(date));
    setIsActive(!isActive);
  }

  return (
    <S.Wrap>
      <S.FilterButton onClick={handleUseOutsideClick}>
        <RiCalendar2Line />
        <strong>{value}</strong>
        <RiArrowUpSLine className={isActive ? "rotate-in" : "rotate-out"} />
      </S.FilterButton>
      <S.DropdownContent
        className={isActive ? "fade-in" : ""}
        ref={dropDownRef}
      >
        <InputFilterMonthAndYear handleChange={handleChange} value={value} />
      </S.DropdownContent>
    </S.Wrap>
  );
};

export default Filter;
