import InputFilterMonthAndYear from "../Inputs/InputFilterMonthAndYear";
import * as S from "./styles";

type HeaderTitleAndFilterProps = {
  title: string;
};

const HeaderTitleAndFilter = ({ title }: HeaderTitleAndFilterProps) => {
  return (
    <S.Wrapper>
      <h4>{title}</h4>
      <InputFilterMonthAndYear />
    </S.Wrapper>
  );
};

export default HeaderTitleAndFilter;
