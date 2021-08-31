import * as S from "./styles";

const RadioButtonTransactionType = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Options htmlFor="recurrent" className="l-radio">
          <input type="radio" id="recurrent" name="selector" />
          <span>Recorrentes</span>
        </S.Options>
        <S.Options htmlFor="eventual" className="l-radio">
          <input type="radio" id="eventual" name="selector" />
          <span>Eventuais</span>
        </S.Options>
      </S.Wrapper>
    </S.Container>
  );
};

export default RadioButtonTransactionType;
