import * as S from "./styles";

const RadioButtonTransactionType = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <input type="radio" name="select" id="recurrent" />
        <input type="radio" name="select" id="eventual" />
        <S.Options htmlFor="recurrent" className="recurrent">
          <span>Recorrentes</span>
        </S.Options>
        <S.Options htmlFor="eventual" className="eventual">
          <span>Eventuais</span>
        </S.Options>
      </S.Wrapper>
    </S.Container>
  );
};

export default RadioButtonTransactionType;
