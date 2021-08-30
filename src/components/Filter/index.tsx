import { RiCalendar2Line, RiArrowUpSLine } from "react-icons/ri";
import InputFilterMonthAndYear from "../Inputs/InputFilterMonthAndYear";

import * as S from "./styles";

const Filter = () => {
  return (
    <S.Wrap>
      <S.FilterButton>
        <RiCalendar2Line />
        <strong>Todos</strong>
        <RiArrowUpSLine />
      </S.FilterButton>
      <S.DropdownButton>
        <InputFilterMonthAndYear />
      </S.DropdownButton>
    </S.Wrap>
  );
};

export default Filter;
