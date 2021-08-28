import * as S from "./styles";

type DisplayUserWelcomeInfoProps = {
  headding: string;
  title: string;
  message: string;
};

const DisplayUserWelcomeInfo = ({
  headding,
  title,
  message,
}: DisplayUserWelcomeInfoProps) => {
  return (
    <S.Wrap>
      <header>
        <h4>{headding}</h4>
      </header>
      <S.Display>
        <S.Info>
          <h1>{title}</h1>
          <p>{message}</p>
        </S.Info>
        <S.Picture>
          <img src="/images/wallet.svg" alt="Wallet" />
        </S.Picture>
      </S.Display>
    </S.Wrap>
  );
};

export default DisplayUserWelcomeInfo;
