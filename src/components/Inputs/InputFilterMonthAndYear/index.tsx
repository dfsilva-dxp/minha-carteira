import { SyntheticEvent } from "react";
import * as S from "./styles";

type InputFilterMonthAndYearProps = {
  value: string;
  handleChange: (event: SyntheticEvent) => void;
};

const InputFilterMonthAndYear = ({
  value,
  handleChange,
}: InputFilterMonthAndYearProps) => {
  return <S.Input type="month" value={value} onChange={handleChange} />;
};

export default InputFilterMonthAndYear;
